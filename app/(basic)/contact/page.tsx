import ContactForm from "@/components/contact/ContactForm"
import Title from "@/components/ui/Title"
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
            <Title text="LIÊN HỆ & GÓP Ý" textColor="text-bamboo-100" />
            <p className="text-bamboo-100 text-center text-2xl text-opacity-50 py-4">
              Để lại lời nhắn trực tiếp cho chúng tôi tại trang web
            </p>
          </div>
          <ContactForm />
          {/* Hoặc */}
        </div>
      </div>

      <div
        id="help"
        className="card bg-bamboo-400 rounded-md w-full col-span-4 overflow-y-auto max-h-full"
      >
        <div className="card-body">
          <Title text="CÂU HỎI THƯỜNG GẶP" textColor="text-bamboo-100" />
          {/* List */}
        </div>
      </div>
    </div>
  )
}

export default Contact
