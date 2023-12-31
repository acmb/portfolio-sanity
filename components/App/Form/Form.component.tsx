"use client"

import {
  SubmitHandler,
  useForm
} from "react-hook-form"
import React, {
  useEffect,
  useState
} from "react"

import styles from "@/regions/Contact/Contact.module.scss"

type Inputs = {
  name: string
  email: string
  message: string
  subject: string
}

type Props = {}

export default function Contact({}: Props) {
  const [clientRendered, setClientRendered] = useState(false)

  const {
    handleSubmit,
    register
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:rejaur-rahman@hotmail.co.uk?subject=${formData.subject}&body=Hi my name is ${formData.name}. ${formData.message}`
  }

  useEffect(() => {
    setClientRendered(true)
  }, [])

  return (
    <>
      <p className={`text-center mb-7 font-light ${styles.copy}`}>
        If you need to get in contact with me, Let&apos;s talk
      </p>
      {clientRendered && (
        <form
          className={`flex w-full ${styles.form}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={`flex ${styles.group}`}>
            <input
              className={`mb-4 p-6 font-light rounded-lg ${styles.input}`}
              placeholder="Name"
              type="text"
              {...register("name")}
            />
            <input
              className={`mb-4 p-6 font-light rounded-lg ${styles.input}`}
              placeholder="Email"
              type="email"
              {...register("email")}
            />
          </div>
          <input
            className={`mb-4 p-6 font-light rounded-lg ${styles.input}`}
            placeholder="subject"
            type="text"
            {...register("subject")}
          />
          <textarea
            className={`mb-4 p-6 font-light rounded-lg ${styles.textarea}`}
            placeholder="Message"
            {...register("message")}
          />
          <button
            className={`p-4 font-light rounded-lg ${styles.button}`}
          >
            Submit
          </button>
        </form>
      )}
    </>
  )
}