"use client"

import React from "react"

function ContactForm() {
  return (
    <form id="contact-form">
      <div>
        <p className="text-bamboo-100 text-2xl pb-4">Họ Tên</p>
        <input
          type="text"
          name="fullname"
          placeholder="Hãy cho chúng tôi biết tên của bạn"
          className="input input-bordered input-lg w-full bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-lg mb-5"
        />
      </div>

      <div>
        <p className="text-bamboo-100 text-2xl pb-4">Email</p>
        <input
          type="email"
          name="email"
          placeholder="Nhập email của bạn tại đây"
          className="input input-bordered input-lg w-full bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-lg mb-5"
        />
      </div>

      <div>
        <p className="text-bamboo-100 text-2xl pb-4">Lời Nhắn</p>
        <textarea
          name="content"
          placeholder="Hãy viết một vài mô tả tại đây..."
          className="textarea textarea-bordered textarea-lg w-full bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-lg mb-5"
        />
      </div>

      <button type="submit" className="btn btn-secondary btn-md w-full">
        GỬI LỜI NHẮN
      </button>
    </form>
  )
}

export default ContactForm
