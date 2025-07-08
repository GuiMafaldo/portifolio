'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import emailjs from '@emailjs/browser'
import { z } from 'zod'

export default function Contato() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)

  const schema = z.object({
    name: z.string().min(1, 'Nome é obrigatório'),
    email: z.string().email('Email inválido'),
    subject: z.string().min(1, 'Assunto é obrigatório'),
    message: z.string().min(1, 'Mensagem é obrigatória'),
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)

    const validatedFields = schema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    })

    if (!validatedFields.success) {
      toast({
        title: 'Erro na validação',
        description: 'Por favor, preencha todos os campos corretamente.',
        variant: 'destructive',
      })
      setIsSubmitting(false)
      return
    }

    const data = validatedFields.data
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
    }

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      
      
      
      console.log('E-mail enviado com sucesso:', result)
      alert('Mensagem enviada com sucesso, em breve retornarei o contato.')
      toast({
        title: 'Mensagem enviada!',
        description: 'Obrigado pelo contato. Retornaremos em breve.',
      })
      


      if (formRef.current) {
        formRef.current.reset()
      }
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error)
      toast({
        title: 'Erro ao enviar mensagem',
        description: 'Por favor, tente novamente mais tarde.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16">
      <div className="container m-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Entre em Contato</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Envie uma Mensagem</CardTitle>
              <CardDescription>Preencha o formulário abaixo para me enviar uma mensagem</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} ref={formRef}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" name="name" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Input id="subject" name="subject" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea style={{resize: 'none'}} id="message" name="message" required />
                  </div>
                </div>
                <CardFooter className="flex justify-end mt-4">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

