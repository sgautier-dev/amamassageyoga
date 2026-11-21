import { z } from "zod"

import { contactLimits, contactReasons } from "./contact"

const singleLine = /^[^\r\n\u0000-\u001f\u007f]*$/

export const contactSchema = z.object({
	name: z
		.string()
		.trim()
		.min(2, "Indiquez votre nom et prénom.")
		.max(contactLimits.name, "Le nom est trop long.")
		.regex(singleLine, "Indiquez un nom sur une seule ligne."),
	email: z
		.string()
		.trim()
		.max(contactLimits.email, "L’adresse e-mail est trop longue.")
		.pipe(z.email("Indiquez une adresse e-mail valide.")),
	phone: z
		.string()
		.trim()
		.max(contactLimits.phone, "Le numéro de téléphone est trop long.")
		.refine(
			(value) => value === "" || /^[+\d\s().-]{6,40}$/.test(value),
			"Indiquez un numéro de téléphone valide.",
		),
	reason: z.enum(
		contactReasons.map((reason) => reason.value),
		{ error: "Choisissez le motif de votre demande." },
	),
	message: z
		.string()
		.trim()
		.min(10, "Votre message doit contenir au moins 10 caractères.")
		.max(
			contactLimits.message,
			"Votre message ne doit pas dépasser 5 000 caractères.",
		)
		.refine(
			(value) => !value.includes("\u0000"),
			"Votre message contient un caractère non pris en charge.",
		),
	privacy: z.literal("on", {
		error: "Veuillez prendre connaissance de la politique de confidentialité.",
	}),
	website: z.string().trim().max(0),
	submissionId: z.uuid(),
})
