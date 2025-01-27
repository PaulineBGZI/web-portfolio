'use client'
import Header from './ui/header'
import TextInput from './ui/text-input'
import TextArea from './ui/textarea'
import toast from 'react-hot-toast'
import { sendEmail } from '../functions/send-email'
import { FaPaperPlane } from 'react-icons/fa6'
import SubmitButton from './ui/submit-button'
import { useSectionInView } from '../lib/hooks'
import { motion } from 'framer-motion'

export default function Contact() {
  const { ref } = useSectionInView('Contact', 0.5)

  return (
    <section
      ref={ref}
      id="contact"
      className="scroll-mt-24"
    >
      <Header
        animateOpacity
        className="text-center"
      >
        Me Contacter
      </Header>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <p className="text-center lg:px-48 md:px-32 sm:px-12 text-lg text-gray-400">
        Merci d&apos;avoir consulté mon site web !</p>
        <p className="text-center lg:px-48 md:px-32 sm:px-12 text-lg text-gray-400">
        Si vous avez des questions ou si vous souhaitez me contacter, n&apos;hésitez pas 
        à m&apos;envoyer un message.
        </p>
        <form
          id="contact-form"
          className="lg:px-48 md:px-32 sm:px-12 mt-12"
          action={async (formData) => {
            const { error } = await sendEmail(formData)
            if (error) {
              toast.error(error)
            }
            const form = document.getElementById(
              'contact-form'
            ) as HTMLFormElement
            form.reset()
            toast.success('Votre message a été envoyé !')
          }}
        >
          <div className="grid grid-cols-2 gap-4 mb-6">
            <TextInput
              placeholder="E-mail"
              type="email"
              name="email"
              required
              max={100}
            />
            <TextInput
              placeholder="Sujet"
              name="subject"
              required
              min={3}
              max={200}
            />
          </div>
          <TextArea
            placeholder="Message"
            className="mb-4"
            name="message"
            required
            maxLength={5000}
          />
          <SubmitButton className="group">
            Envoyer{' '}
            <FaPaperPlane className="group-hover:translate-x-1 group-hover:transform group-hover:-translate-y-1 transition-transform" />
          </SubmitButton>
        </form>
      </motion.div>
    </section>
  )
}
