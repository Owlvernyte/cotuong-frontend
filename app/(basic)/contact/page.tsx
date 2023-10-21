import ContactForm from "@/components/contact/ContactForm"
import HelpList from "@/components/contact/HelpList"
import Image from "next/image"
import Link from "next/link"
import React from "react"

function Contact() {
  return (
    <div
      id="contact-and-help"
      className="grid grid-cols-8 gap-2 grid-flow-row-dense flex-1 h-full"
    >
      <div
        id="contact"
        className="card bg-bamboo-400 rounded-md w-full col-span-4 overflow-y-auto max-h-full"
      >
        <div className="card-body">
          <div className="mb-2">
            <p className="text-bamboo-100 text-center text-2xl md:text-4xl pb-2">
              LIÊN HỆ & GÓP Ý
            </p>
            <p className="text-bamboo-100 text-center text-xl text-opacity-50">
              Để lại lời nhắn trực tiếp cho chúng tôi tại trang web
            </p>
          </div>

          <ContactForm />

          <div className="my-2">
            <div className="flex items-center">
              <div className="w-96 h-[1px] border-1 bg-bamboo-100 opacity-50 solid"></div>
              <p className="text-center p-3.5 text-bamboo-100 text-xl opacity-50 inline-block">
                hoặc
              </p>
              <div className="w-96 h-[1px] border-1 bg-bamboo-100 opacity-50 solid"></div>
            </div>

            <p className="text-2xl text-bamboo-100 pb-2">
              Liên lạc với chúng tôi tại:
            </p>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-row space-x-2 justify-center items-center">
                <Image
                  src="/assets/mail_google.svg"
                  alt="Google Logo"
                  width={40}
                  height={40}
                />
                <p className="text-lg text-bamboo-100">owlvernyte@gmail.com</p>
              </div>
              <div className="flex flex-row space-x-2 justify-center items-center">
                <Image
                  src="/assets/discord.svg"
                  alt="Google Logo"
                  width={40}
                  height={40}
                />
                <Link
                  href={"https://discord.gg/cZN4PJaH"}
                  className="text-lg text-bamboo-100"
                  target="_blank"
                >
                  https://discord.gg/cZN4PJaH
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="help"
        className="card bg-bamboo-400 rounded-md w-full col-span-4 overflow-y-auto max-h-full"
      >
        <div className="card-body">
          <div>
            <p className="text-bamboo-100 text-center text-2xl md:text-4xl pb-2">
              CÂU HỎI THƯỜNG GẶP
            </p>
          </div>

          <HelpList />
        </div>
      </div>
    </div>
  )
}

export default Contact
