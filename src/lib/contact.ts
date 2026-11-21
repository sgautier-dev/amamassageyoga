export const contactReasons = [
	{
		value: "massages",
		label: "Demande d'information sur les massages",
		hint: "",
	},
	{
		value: "rendez-vous",
		label: "Demande de rendez-vous",
		hint: "Vous pouvez préciser le soin souhaité et vos disponibilités.",
	},
	{
		value: "bon-cadeau",
		label: "Demande de bon cadeau",
		hint: "Vous pouvez préciser le soin souhaité, la durée et le nom du bénéficiaire éventuel.",
	},
	{
		value: "devis",
		label: "Demande de devis (entreprise, événement…)",
		hint: "Vous pouvez préciser le type d’événement, la date envisagée, le lieu et le nombre de personnes.",
	},
	{
		value: "partenariat",
		label: "Demande de collaboration / partenariat",
		hint: "",
	},
	{ value: "autre", label: "Autre demande", hint: "" },
] as const

export type ContactReason = (typeof contactReasons)[number]["value"]

export const contactLimits = { name: 120, email: 254, phone: 40, message: 5000 }

export function getInitialReason(value: unknown): ContactReason | "" {
	return contactReasons.find((reason) => reason.value === value)?.value ?? ""
}

export type ContactField =
	"name" | "email" | "phone" | "reason" | "message" | "privacy"

export type ContactFormState = {
	status: "idle" | "error" | "success"
	message: string
	errors?: Partial<Record<ContactField, string[]>>
}

export const initialContactState: ContactFormState = {
	status: "idle",
	message: "",
}

export const contactFailureMessage =
	"L’envoi n’a pas pu être confirmé. Vos champs sont conservés. Réessayez dans quelques minutes ou contactez-moi au 06 10 75 50 48."

export const contactRateLimitMessage =
	"Trop de demandes ont été effectuées. Patientez quelques minutes avant de réessayer ou contactez-moi au 06 10 75 50 48."
