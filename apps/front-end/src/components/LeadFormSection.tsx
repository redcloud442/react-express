import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreateFormSchema, type CreateFormType } from "@/lib/schema";
import { createForm } from "@/service/form/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const LeadFormSection = () => {
  const utmData = JSON.parse(sessionStorage.getItem("utmData") || "{}");

  const [success, setSuccess] = useState(false);

  const form = useForm<CreateFormType>({
    resolver: zodResolver(CreateFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      utmData,
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const handleSubmitForm = async (data: CreateFormType) => {
    try {
      const formData = {
        ...data,
        utmData,
      };

      await createForm(formData);

      setSuccess(true);

      form.reset();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <section
      className="relative bg-gradient-to-r from-purple-500 to-indigo-600 py-24 text-white overflow-hidden"
      id="contact"
    >
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold leading-tight">Get Instant Access to the Complete System</h2>
            <p className="text-lg text-purple-100">
              Enter your details below and receive immediate access to our system blueprint. No waiting, no hassle —
              just results.
            </p>
            <ul className="text-sm text-purple-200 list-disc pl-5 space-y-1">
              <li>Step-by-step guides</li>
              <li>Bonus productivity tools</li>
              <li>Lifetime support</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {!success ? (
              <Form {...form}>
                <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-200" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-200" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Phone (optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="+63 912 345 6789" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-200" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:brightness-110 hover:scale-[1.01] transition-all"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      "Get Access Now"
                    )}
                  </Button>
                </form>
              </Form>
            ) : (
              <Card className="text-center bg-green-100 border-green-300">
                <CardHeader>
                  <CardTitle className="text-green-800 text-lg">Thank you!</CardTitle>
                </CardHeader>
                <CardContent className="text-green-700">Your form has been successfully submitted.</CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;
