"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
// import { submitContactForm } from "./actions";
// import { useToast } from "@/components/ui/use-toast";

export default function ContactPage() {
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const isSubmitting = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  //   const { toast } = useToast();

  //   async function handleSubmit(formData: FormData) {
  //     setIsSubmitting(true);

  //     try {
  //     //   const result = await submitContactForm(formData);

  //       if (result.success) {
  //         setIsSubmitted(true);
  //         toast({
  //           title: "Success!",
  //           description: result.message,
  //         });
  //       } else {
  //         toast({
  //           title: "Error",
  //           description: result.message,
  //           variant: "destructive",
  //         });
  //       }
  //     } catch (error) {
  //       toast({
  //         title: "Error",
  //         description: "An unexpected error occurred. Please try again.",
  //         variant: "destructive",
  //       });
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-700">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Contact Us
              </h1>
              <p className="max-w-[700px] text-slate-400 dark:text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have questions or want to collaborate? Reach out to our
                GeeksForGeeks Student Chapter.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-600 ">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <Card className="bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-800">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <CheckCircle2 className="h-12 w-12 text-emerald-500 dark:text-emerald-400" />
                      <h3 className="text-xl font-medium text-emerald-800 dark:text-emerald-300">
                        Message Sent!
                      </h3>
                      <p className="text-emerald-700 dark:text-emerald-400">
                        Thank you for reaching out. We will get back to you as
                        soon as possible.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-4 bg-gradient-to-r from-green-300 to-green-600 hover:from-green-400 hover:to-green-700 text-white"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <form className="space-y-6">
                  <div className="space-y-2 text-white">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="bg-neutral dark:bg-slate-950"
                    />
                  </div>
                  <div className="space-y-2 text-white">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      required
                      className="bg-neutral dark:bg-slate-950"
                    />
                  </div>
                  <div className="space-y-2 text-white">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      required
                      className="bg-neutral dark:bg-slate-950"
                    />
                  </div>
                  <div className="space-y-2 text-white">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      className="min-h-[150px] bg-neutral dark:bg-slate-950"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-300 to-green-600 hover:from-green-400 hover:to-green-700 text-white"
                    // disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div>
                <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-600 ">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <Card className="overflow-hidden border-2 shadow-md bg-gradient-to-r ">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-green-600 dark:text-green-400 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-white">Email</h3>
                        <p className="text-slate-400 dark:text-slate-400">
                          gfgviit@gmail.com
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden border-2 shadow-md bg-gradient-to-r ">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-green-600 dark:text-green-400 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-white">Phone</h3>
                        <p className="text-slate-400 dark:text-slate-400">
                          +91 7674946477
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden border-2 shadow-md bg-gradient-to-r ">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-green-600 dark:text-green-400 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-white">Location</h3>
                        <p className="text-slate-400 dark:text-slate-400">
                          Department of Computer Science and Engineering
                          <br />
                          Vignans Institue of Information Technology
                          <br />
                          Visakhapatnam-530045
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* <div>
                <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-600 ">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      How can I join the GeeksForGeeks Student Chapter?
                    </AccordionTrigger>
                    <AccordionContent>
                      You can join our chapter by registering on our website and
                      attending our orientation session. We welcome students
                      from all departments who are interested in technology and
                      programming.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      Are the events free to attend?
                    </AccordionTrigger>
                    <AccordionContent>
                      Most of our events are free for students. Some specialized
                      workshops or bootcamps might have a nominal fee to cover
                      materials and resources. We always announce the details in
                      advance.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      Can I volunteer for the chapter?
                    </AccordionTrigger>
                    <AccordionContent>
                      We're always looking for enthusiastic volunteers to help
                      organize events, create content, and manage various
                      activities. Please reach out to us through the contact
                      form.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      Do you provide certificates for participation?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, we provide certificates for participation in our
                      workshops, hackathons, and other events. The certificates
                      are digitally signed and can be added to your portfolio.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>
                      How can organizations collaborate with the chapter?
                    </AccordionTrigger>
                    <AccordionContent>
                      We're open to collaborations for sponsorships, workshops,
                      tech talks, and other events. Please contact us with your
                      proposal, and our team will get back to you to discuss the
                      details.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* <section className="w-full py-12 md:py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="container px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
              Find Us On Campus
            </h2>
            <div className="aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
              Replace with an actual map or campus image 
              <div className="w-full h-full bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center">
                <MapPin className="h-12 w-12 text-slate-400 dark:text-slate-400" />
                <span className="ml-2 text-slate-400 dark:text-slate-400">
                  Campus Map Placeholder
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}
