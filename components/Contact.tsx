//@ts-nocheck
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
    useNetlifyForm,
    NetlifyFormProvider,
    NetlifyFormComponent,
} from "react-netlify-forms";

import FadeIn from "./ui/FadeIn";


type FormValues = {
    Name: string;
    Email: string;
    Postcode?: string;
    Phone?: string;
    Referrer?: string;
    Message: string;
};

const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();
    const netlify = useNetlifyForm({
        name: "Contact",
        action: "/thank-you",
        onSuccess: (response, context) => {
            reset()
        }
    })

    const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
        netlify.handleSubmit(null, data)
    }

    return (
        <FadeIn>
            <div className="py-10 px-6 my-4 sm:px-10 xl:p-12 rounded-lg bg-tertiary/10">
                <h3 className="text-2xl font-medium text-primary idanchorcontactus" id="contact-us">Get in touch</h3>
                <NetlifyFormProvider {...netlify}>
                    <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
                        <div
                            className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-2 sm:gap-x-8 sm:gap-y-4"
                        >
                            <input type="hidden" name="form-name" value="Contact" />
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block text-sm font-medium text-primary">
                                    Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        name="Name"
                                        type="text"
                                        id="name"
                                        autoComplete="name"
                                        required
                                        className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-secondary shadow-md focus:border-accent focus:ring-accent"
                                        {...register("Name", { required: "Name is required." })}
                                    />
                                    {errors.Name && <p className="text-red-500">{errors.Name.message}</p>}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium text-primary">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        name="Email"
                                        type="email"
                                        id="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-secondary shadow-md focus:border-accent focus:ring-accent"
                                        {...register("Email", { required: "Email is required." })}
                                    />
                                    {errors.Email && <p className="text-red-500">{errors.Email.message}</p>}
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <label htmlFor="postcode" className="block text-sm font-medium text-primary">
                                        Postcode
                                    </label>
                                    <span className="text-secondary text-sm">
                                        Optional
                                    </span>
                                </div>
                                <div className="mt-1">
                                    <input
                                        name="Postcode"
                                        type="text"
                                        id="postcode"
                                        autoComplete="postcode"
                                        className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-secondary shadow-md focus:border-accent focus:ring-accent"
                                        {...register("Postcode")}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <label htmlFor="phone" className="block text-sm font-medium text-primary">
                                        Phone
                                    </label>
                                    <span className="text-secondary text-sm">
                                        Optional
                                    </span>
                                </div>
                                <div className="mt-1">
                                    <input
                                        name="Phone"
                                        type="tel"
                                        id="phone"
                                        autoComplete="tel"
                                        className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-secondary shadow-md focus:border-accent focus:ring-accent"
                                        {...register("Phone")}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="referrer" className="block text-sm font-medium text-primary">
                                    How did you hear about us?
                                </label>
                                <div className="mt-1">
                                    <input
                                        name="Referrer"
                                        type="referrer"
                                        id="referrer"
                                        className="block w-full rounded-md border-gray-300 py-3 px-4 text-secondary shadow-md focus:border-accent focus:ring-accent"
                                        {...register("Referrer")}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-medium text-primary">
                                    Message
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        name="Message"
                                        id="message"
                                        rows={4}
                                        className="block w-full rounded-md border-gray-300 py-3 px-4 text-secondary shadow-md focus:border-accent focus:ring-accent"
                                        required
                                        {...register("Message", { required: "Message is required." })}
                                    />
                                    {errors.Message && <p className="text-red-500">{errors.Message.message}</p>}
                                </div>
                            </div>
                            {netlify.error && (
                                <div>
                                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                        <strong className="font-bold">Oh no!</strong>
                                        <span className="block sm:inline"> It looks like something went wrong.</span>
                                    </div>
                                </div>
                            )}
                            {netlify.success && (
                                <div>
                                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                                        <span className="block sm:inline">Thanks for getting in touch!</span>
                                    </div>
                                </div>
                            )}
                            {netlify.submitting && (
                                <div>
                                    <div className="bg-gray-100 border border-gray-400 text-gray-700 px-4 py-3 rounded relative" role="alert">
                                        <span className="block sm:inling">Submitting...</span>
                                    </div>
                                </div>
                            )}
                            <div className="sm:col-span-2 sm:flex sm:justify-end">
                                <input
                                    name="Submit"
                                    type="submit"
                                    className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-accent text-accentcontrast hover:text-accentcontrasthover hover:scale-105 px-6 py-3 text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 sm:w-auto"
                                    value="Submit"
                                />
                            </div>
                        </div>
                    </NetlifyFormComponent>
                </NetlifyFormProvider>
            </div>
        </FadeIn>
    )
}

export default Contact;