import React from "react";

import FadeIn from "./ui/FadeIn";


const Contact = () => {

    return (
        <FadeIn>
            <div className="py-10 px-6 my-4 sm:px-10 xl:p-12 rounded-lg bg-tertiary/10">
                <h3 className="text-2xl font-medium text-primary" id="contact-us">Get in touch</h3>
                <form name="contact" method="POST" action="/success" netlify-honeypot="bot-field" data-netlify="true" className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-2 sm:gap-x-8 sm:gap-y-4">
                    <p className="hidden">
                        <label>
                            Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                        </label>
                    </p>
                    <div className="sm:col-span-2">
                        <label htmlFor="name" className="block text-sm font-medium text-primary">
                            Name
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                id="name"
                                autoComplete="name"
                                required
                                className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-secondary shadow-md focus:border-accent focus:ring-accent"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-medium text-primary">
                            Email
                        </label>
                        <div className="mt-1">
                            <input
                                type="email"
                                id="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-secondary shadow-md focus:border-accent focus:ring-accent"
                            />
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
                                type="text"
                                id="postcode"
                                autoComplete="postcode"
                                className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-secondary shadow-md focus:border-accent focus:ring-accent"
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
                                type="tel"
                                id="phone"
                                autoComplete="tel"
                                className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-secondary shadow-md focus:border-accent focus:ring-accent"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="referrer" className="block text-sm font-medium text-primary">
                            How did you hear about us?
                        </label>
                        <div className="mt-1">
                            <input
                                type="referrer"
                                id="referrer"
                                className="block w-full rounded-md border-gray-300 py-3 px-4 text-secondary shadow-md focus:border-accent focus:ring-accent"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-medium text-primary">
                            Message
                        </label>
                        <div className="mt-1">
                            <textarea
                                id="message"
                                rows={4}
                                className="block w-full rounded-md border-gray-300 py-3 px-4 text-secondary shadow-md focus:border-accent focus:ring-accent"
                                required
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                        <input
                            type="submit"
                            className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-accent text-accentcontrast hover:text-accentcontrasthover hover:scale-105 px-6 py-3 text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 sm:w-auto"
                        >Submit</input>
                    </div>
                </form>
            </div>
        </FadeIn>
    )
}

export default Contact;