"use client"

import Link from "next/link"
import { useActionState, useEffect, useRef, useState } from "react"

import { submitContact } from "@/app/contact/actions"
import {
	contactFailureMessage,
	contactLimits,
	contactReasons,
	getInitialReason,
	initialContactState,
	type ContactField,
	type ContactFormState,
	type ContactReason,
} from "@/lib/contact"

const inputClassName =
	"mt-2 block min-h-12 w-full rounded-2xl border border-ama-purple/30 bg-white px-4 py-3 text-base text-foreground outline-none focus-visible:border-ama-purple focus-visible:ring-2 focus-visible:ring-ama-purple/50 aria-invalid:border-red-700 disabled:opacity-70"

function FieldError({
	field,
	errors,
}: {
	field: ContactField
	errors: ContactFormState["errors"]
}) {
	return errors?.[field]?.length ? (
		<p id={`${field}-error`} className="mt-2 text-sm text-red-800">
			{errors[field]?.[0]}
		</p>
	) : null
}

export default function ContactForm({
	initialReason,
	submissionId,
}: {
	initialReason: ContactReason | ""
	submissionId: string
}) {
	const [values, setValues] = useState({
		name: "",
		email: "",
		phone: "",
		reason: initialReason,
		message: "",
		privacy: false,
	})
	const formRef = useRef<HTMLFormElement>(null)
	const feedbackRef = useRef<HTMLDivElement>(null)
	const submittingRef = useRef(false)
	const [state, formAction, pending] = useActionState(
		async (
			previous: ContactFormState,
			formData: FormData,
		): Promise<ContactFormState> => {
			try {
				return await submitContact(previous, formData)
			} catch {
				// Includes transport failures and HTML/429 responses outside the action.
				return { status: "error", message: contactFailureMessage }
			} finally {
				submittingRef.current = false
			}
		},
		initialContactState,
	)
	const hint = contactReasons.find(
		(reason) => reason.value === values.reason,
	)?.hint
	const errors = state.errors

	useEffect(() => {
		if (state.status === "idle") return
		const invalidField = formRef.current?.querySelector<HTMLElement>(
			'[aria-invalid="true"]',
		)
		if (invalidField) invalidField.focus()
		else feedbackRef.current?.focus()
	}, [state])

	return (
		<div className="rounded-3xl border border-ama-purple/15 bg-white/85 p-6 shadow-sm sm:p-10">
			<div
				ref={feedbackRef}
				role={state.status === "error" ? "alert" : "status"}
				aria-live={state.status === "error" ? "assertive" : "polite"}
				aria-atomic="true"
				tabIndex={-1}
				className={
					state.status === "idle"
						? ""
						: "mb-6 rounded-2xl bg-background p-4 text-base leading-7 outline-ama-purple"
				}
			>
				{state.message}
			</div>
			{state.status === "success" ? (
				<Link
					href="/"
					className="font-semibold text-ama-purple underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
				>
					Revenir à l’accueil
				</Link>
			) : (
				<form
					ref={formRef}
					action={formAction}
					aria-busy={pending}
					onReset={(event) => {
						// React resets forms after resolved actions, including validation errors.
						event.preventDefault()
					}}
					onSubmit={(event) => {
						if (submittingRef.current) event.preventDefault()
						else submittingRef.current = true
					}}
					className="space-y-8"
				>
					<p className="text-sm leading-6 text-muted">
						Les champs marqués d’un * sont obligatoires.
					</p>
					<fieldset disabled={pending} className="space-y-5">
						<legend className="mb-5 text-xl font-semibold text-foreground">
							Vos coordonnées
						</legend>
						<div>
							<label htmlFor="name" className="font-medium">
								Nom et prénom *
							</label>
							<input
								id="name"
								name="name"
								autoComplete="name"
								required
								minLength={2}
								maxLength={contactLimits.name}
								value={values.name}
								onChange={(event) =>
									setValues({ ...values, name: event.target.value })
								}
								aria-invalid={Boolean(errors?.name)}
								aria-describedby={errors?.name ? "name-error" : undefined}
								className={inputClassName}
							/>
							<FieldError field="name" errors={errors} />
						</div>
						<div className="grid gap-5 sm:grid-cols-2">
							<div>
								<label htmlFor="email" className="font-medium">
									Adresse e-mail *
								</label>
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									maxLength={contactLimits.email}
									value={values.email}
									onChange={(event) =>
										setValues({ ...values, email: event.target.value })
									}
									aria-invalid={Boolean(errors?.email)}
									aria-describedby={errors?.email ? "email-error" : undefined}
									className={inputClassName}
								/>
								<FieldError field="email" errors={errors} />
							</div>
							<div>
								<label htmlFor="phone" className="font-medium">
									Téléphone (facultatif)
								</label>
								<input
									id="phone"
									name="phone"
									type="tel"
									autoComplete="tel"
									maxLength={contactLimits.phone}
									value={values.phone}
									onChange={(event) =>
										setValues({ ...values, phone: event.target.value })
									}
									aria-invalid={Boolean(errors?.phone)}
									aria-describedby={errors?.phone ? "phone-error" : undefined}
									className={inputClassName}
								/>
								<FieldError field="phone" errors={errors} />
							</div>
						</div>
					</fieldset>
					<fieldset disabled={pending}>
						<legend className="mb-5 text-xl font-semibold text-foreground">
							Votre demande
						</legend>
						<label htmlFor="reason" className="font-medium">
							Motif de votre demande *
						</label>
						<select
							id="reason"
							name="reason"
							required
							value={values.reason}
							onChange={(event) =>
								setValues({
									...values,
									reason: getInitialReason(event.target.value),
								})
							}
							aria-invalid={Boolean(errors?.reason)}
							aria-describedby={errors?.reason ? "reason-error" : undefined}
							className={inputClassName}
						>
							<option value="" disabled>
								Choisissez un motif
							</option>
							{contactReasons.map((reason) => (
								<option key={reason.value} value={reason.value}>
									{reason.label}
								</option>
							))}
						</select>
						<FieldError field="reason" errors={errors} />
					</fieldset>
					<fieldset disabled={pending}>
						<legend className="mb-5 text-xl font-semibold text-foreground">
							Votre message
						</legend>
						<label htmlFor="message" className="font-medium">
							Message *
						</label>
						<p
							id="message-hint"
							aria-live="polite"
							className="mt-2 text-sm leading-6 text-muted"
						>
							{hint ? `${hint} ` : ""}De 10 à 5 000 caractères. Merci de ne pas
							transmettre de données médicales.
						</p>
						<textarea
							id="message"
							name="message"
							required
							rows={7}
							minLength={10}
							maxLength={contactLimits.message}
							value={values.message}
							onChange={(event) =>
								setValues({ ...values, message: event.target.value })
							}
							aria-invalid={Boolean(errors?.message)}
							aria-describedby={`message-hint${errors?.message ? " message-error" : ""}`}
							className={`${inputClassName} resize-y`}
						/>
						<FieldError field="message" errors={errors} />
					</fieldset>
					<div>
						<div className="flex items-start gap-3">
							<input
								id="privacy"
								name="privacy"
								type="checkbox"
								required
								disabled={pending}
								checked={values.privacy}
								onChange={(event) =>
									setValues({ ...values, privacy: event.target.checked })
								}
								aria-invalid={Boolean(errors?.privacy)}
								aria-describedby={errors?.privacy ? "privacy-error" : undefined}
								className="mt-1 size-5 shrink-0 accent-ama-purple focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ama-purple"
							/>
							<label htmlFor="privacy" className="text-sm leading-7">
								J’ai pris connaissance de la{" "}
								<Link
									href="/politique-de-confidentialite"
									target="_blank"
									rel="noopener noreferrer"
									className="font-semibold text-ama-purple underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
								>
									politique de confidentialité
									<span className="sr-only"> (nouvel onglet)</span>
								</Link>
								. *
							</label>
						</div>
						<FieldError field="privacy" errors={errors} />
					</div>
					<div aria-hidden="true" className="hidden">
						<label htmlFor="website">Leave this field empty</label>
						<input
							id="website"
							name="website"
							tabIndex={-1}
							autoComplete="off"
							defaultValue=""
						/>
					</div>
					<input type="hidden" name="submissionId" value={submissionId} />
					<button
						type="submit"
						disabled={pending}
						className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-ama-purple px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ama-purple disabled:cursor-wait disabled:opacity-70 sm:w-auto"
					>
						{pending ? "Envoi en cours…" : "Envoyer ma demande"}
					</button>
					<noscript>
						<p>
							Activez JavaScript pour utiliser le formulaire ou contactez-moi au{" "}
							<a href="tel:+33610755048">06 10 75 50 48</a>.
						</p>
					</noscript>
				</form>
			)}
		</div>
	)
}
