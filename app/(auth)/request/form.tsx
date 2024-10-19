"use client";

import { useForm } from "@tanstack/react-form";
import LogoText from "@/components/ui/logo-text";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  city: string;
  pcode: string;
  street: string;
  plan: Plan;
}

enum Plan {
  Atervinningsstart = "Återvinningsstart",
  Miljomedveten = "Miljömedveten",
  GronLivsstil = "Grön livsstil",
}

export default function Form() {
  const form = useForm<FormValues>({
    defaultValues: { name: "", email: "", phone: "", city: "", pcode: "", street: "", plan: Plan.Miljomedveten },
    onSubmit: async ({ value }) => {
      const res = await fetch("/api/send-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      if (res.ok) {
        form.reset();
        alert("Anmälan mottagen! Vi kommer kontakta dig inom kort.");
      } else {
        alert("Något gick fel. Försök igen.");
      }
    },
  });

  return (
    <>
      {/* Content */}
      <div className="w-full md:w-1/2">
        <div className="min-h-screen h-full flex flex-col justify-center">
          <div className="px-5 sm:px-6 py-8">
            <div className="w-full max-w-md mx-auto">
              {/* Site branding */}
              <div className="mb-6">
                {/* Logo */}
                <LogoText />
              </div>

              <h1 className="h2 font-quicksand text-slate-800 mb-12">Kom igång</h1>

              {/* Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  form.handleSubmit();
                }}
              >
                <div className="space-y-4">
                  <form.Field
                    name="name"
                    // eslint-disable-next-line
                    children={(field) => (
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="name">
                          För- och efternamn <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id={field.name}
                          name={field.name}
                          className="form-input py-2 w-full"
                          type="text"
                          minLength={4}
                          required
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                      </div>
                    )}
                  />
                  <form.Field
                    name="email"
                    // eslint-disable-next-line
                    children={(field) => (
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="email">
                          E-post <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id={field.name}
                          name={field.name}
                          className="form-input py-2 w-full"
                          type="email"
                          required
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                      </div>
                    )}
                  />
                  <form.Field
                    name="phone"
                    // eslint-disable-next-line
                    children={(field) => (
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="phone">
                          Mobilnummer <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id={field.name}
                          name={field.name}
                          className="form-input py-2 w-full"
                          type="text"
                          minLength={4}
                          required
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                      </div>
                    )}
                  />

                  <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <form.Field
                      name="city"
                      // eslint-disable-next-line
                      children={(field) => (
                        <div className="sm:w-1/2">
                          <label className="block text-sm font-medium mb-1" htmlFor="city">
                            Postort <span className="text-rose-500">*</span>
                          </label>
                          <input
                            id={field.name}
                            name={field.name}
                            className="form-input py-2 w-full"
                            type="text"
                            minLength={4}
                            required
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                          />
                        </div>
                      )}
                    />
                    <form.Field
                      name="pcode"
                      // eslint-disable-next-line
                      children={(field) => (
                        <div className="sm:w-1/2">
                          <label className="block text-sm font-medium mb-1" htmlFor="pcode">
                            Postnummer <span className="text-rose-500">*</span>
                          </label>
                          <input
                            id={field.name}
                            name={field.name}
                            className="form-input py-2 w-full"
                            type="text"
                            minLength={4}
                            required
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                          />
                        </div>
                      )}
                    />
                  </div>
                  <form.Field
                    name="street"
                    // eslint-disable-next-line
                    children={(field) => (
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="street">
                          Gatuadress <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id={field.name}
                          name={field.name}
                          className="form-input py-2 w-full"
                          type="text"
                          minLength={4}
                          required
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                      </div>
                    )}
                  />
                  <form.Field
                    name="plan"
                    // eslint-disable-next-line
                    children={(field) => (
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="country">
                          Abonnemangsplan <span className="text-rose-500">*</span>
                        </label>
                        <select
                          id="plan"
                          className="form-select py-2 w-full"
                          required
                          onChange={(e) => field.handleChange(e.target.value as Plan)}
                          value={field.state.value}
                        >
                          <option value={Plan.Atervinningsstart}>{Plan.Atervinningsstart} - 229 kr/mån - 1 ggr/mån</option>
                          <option defaultChecked value={Plan.Miljomedveten}>
                            {Plan.Miljomedveten} - 399 kr/mån - 2 ggr/mån
                          </option>
                          <option value={Plan.GronLivsstil}>{Plan.GronLivsstil} - 599 kr/mån - 4 ggr/mån</option>
                        </select>
                      </div>
                    )}
                  />
                </div>
                <div className="mt-6">
                  <form.Subscribe
                    selector={(state) => [state.canSubmit, state.isSubmitting]}
                    // eslint-disable-next-line
                    children={([canSubmit, isSubmitting]) => (
                      <button className="btn-sm w-full text-sm text-white bg-green-600 hover:bg-green-700 group" type="submit" disabled={!canSubmit}>
                        {isSubmitting ? (
                          "Skickar..."
                        ) : (
                          <>
                            Skicka anmälan{" "}
                            <span className="tracking-normal text-green-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                              -&gt;
                            </span>
                          </>
                        )}
                      </button>
                    )}
                  />
                </div>
                <div className="mt-5">
                  <label className="flex items-start">
                    <input type="checkbox" className="form-checkbox mt-0.5" defaultChecked />
                    <span className="text-sm text-slate-500 ml-3">
                      Genom att fylla i detta formulär samtycker jag till insamling och användning av mina personuppgifter.
                    </span>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
