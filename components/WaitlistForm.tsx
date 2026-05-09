"use client";

import { useState } from "react";

const STAGE_OPTIONS = [
  { value: "pregnant", label: "I'm pregnant 🤰" },
  { value: "0-6mo", label: "My baby is 0–6 months 👶" },
  { value: "6-12mo", label: "My baby is 6–12 months 🌱" },
  { value: "toddler", label: "I have a toddler or older child 🧒" },
  { value: "multiple", label: "I have multiple children 👨‍👩‍👧‍👦" },
  { value: "planning", label: "Planning for the future ✨" },
];

const REFERRAL_OPTIONS = [
  "Instagram",
  "TikTok",
  "A friend told me",
  "LinkedIn",
  "I searched for it",
  "Other",
];

const APP_OPTIONS = [
  "The Wonder Weeks",
  "Huckleberry",
  "Baby Connect",
  "Ovia Parenting",
  "BabyCenter",
  "The Bump",
  "Glow Baby",
  "Frida",
  "Owlet",
  "None — maisie will be my first 🎉",
  "Other",
];

const PRIORITY_COUNTRIES = ["Ireland", "United Kingdom", "United States"];
const OTHER_COUNTRIES = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina",
  "Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados",
  "Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina",
  "Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia",
  "Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros",
  "Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti",
  "Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea",
  "Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia",
  "Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau",
  "Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq",
  "Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo",
  "Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya",
  "Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives",
  "Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia",
  "Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia",
  "Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea",
  "North Macedonia","Norway","Oman","Pakistan","Palau","Palestine","Panama",
  "Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania",
  "Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines",
  "Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia",
  "Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia",
  "South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname",
  "Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste",
  "Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu",
  "Uganda","Ukraine","United Arab Emirates","Uruguay","Uzbekistan","Vanuatu","Venezuela",
  "Vietnam","Yemen","Zambia","Zimbabwe",
];

type FormState = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedApps, setSelectedApps] = useState<string[]>([]);

  const [fields, setFields] = useState({
    firstName: "",
    email: "",
    stage: "",
    dueDate: "",
    country: "",
    referral: "",
  });

  function toggleApp(app: string) {
    setSelectedApps((prev) =>
      prev.includes(app) ? prev.filter((a) => a !== app) : [...prev, app]
    );
  }

  function setField(name: string, value: string) {
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, appsUsed: selectedApps }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setFormState("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setFormState("error");
    }
  }

  /* ─── Success state ─── */
  if (formState === "success") {
    return (
      <div className="bg-lilac rounded-3xl p-10 md:p-14 flex flex-col gap-6 text-center text-white">
        <p className="text-3xl font-black">you&apos;re on the list. ✦</p>
        <p className="text-lg font-black italic">future you is already grateful.</p>
        <p className="text-[1rem] font-light leading-[1.8] text-white/85">
          We&apos;ll be in touch the moment maisie is ready for you.
          <br />
          In the meantime — give yourself credit for showing up today.
          <br />
          <strong className="font-semibold">You showed up.</strong>
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <a
            href="https://instagram.com/maisieapp_"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-full transition-all text-sm"
          >
            share on Instagram ✦
          </a>
          <a
            href={`https://wa.me/?text=${encodeURIComponent("I just joined the waitlist for maisie — the daily habit app for new mothers. If you're pregnant or in the first year, you need to know about this: https://maisieapp.com")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-full transition-all text-sm"
          >
            share on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  const inputClass =
    "w-full bg-white border border-lilac-light rounded-xl px-4 py-3 text-sm font-light text-ink placeholder:text-mid focus:outline-none focus:ring-2 focus:ring-lilac focus:border-transparent transition-all";

  const labelClass = "block text-sm font-semibold text-ink mb-1.5";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
      {/* First name */}
      <div>
        <label htmlFor="firstName" className={labelClass}>
          First name
        </label>
        <input
          id="firstName"
          type="text"
          required
          aria-required="true"
          placeholder="your name"
          value={fields.firstName}
          onChange={(e) => setField("firstName", e.target.value)}
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          aria-required="true"
          placeholder="your email"
          value={fields.email}
          onChange={(e) => setField("email", e.target.value)}
          className={inputClass}
        />
      </div>

      {/* Stage */}
      <div>
        <fieldset>
          <legend className={labelClass}>
            Where are you in your journey?
          </legend>
          <div className="flex flex-wrap gap-2 mt-2">
            {STAGE_OPTIONS.map((opt) => (
              <button
                type="button"
                key={opt.value}
                onClick={() => setField("stage", opt.value)}
                className={`text-sm px-4 py-2.5 rounded-full border transition-all duration-150 focus-visible:ring-2 focus-visible:ring-lilac ${
                  fields.stage === opt.value
                    ? "bg-lilac text-white border-lilac"
                    : "bg-off text-mid border-lilac-light hover:border-lilac"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      {/* Due date */}
      <div>
        <label htmlFor="dueDate" className={labelClass}>
          When is your baby due / when is your baby&apos;s birthday?
        </label>
        <input
          id="dueDate"
          type="text"
          inputMode="numeric"
          placeholder="DD/MM/YYYY"
          pattern="\d{2}/\d{2}/\d{4}"
          maxLength={10}
          value={fields.dueDate}
          onChange={(e) => {
            let v = e.target.value.replace(/[^\d]/g, "");
            if (v.length > 2) v = v.slice(0, 2) + "/" + v.slice(2);
            if (v.length > 5) v = v.slice(0, 5) + "/" + v.slice(5);
            setField("dueDate", v.slice(0, 10));
          }}
          className={inputClass}
        />
      </div>

      {/* Country */}
      <div>
        <label htmlFor="country" className={labelClass}>
          Where are you based?
        </label>
        <select
          id="country"
          value={fields.country}
          onChange={(e) => setField("country", e.target.value)}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="">Select your country</option>
          <optgroup label="—">
            {PRIORITY_COUNTRIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </optgroup>
          <optgroup label="All countries">
            {OTHER_COUNTRIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </optgroup>
        </select>
      </div>

      {/* Referral */}
      <div>
        <label htmlFor="referral" className={labelClass}>
          How did you hear about maisie?
        </label>
        <select
          id="referral"
          value={fields.referral}
          onChange={(e) => setField("referral", e.target.value)}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="">Select one</option>
          {REFERRAL_OPTIONS.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      {/* Apps used — multi-select pills */}
      <div>
        <fieldset>
          <legend className={labelClass}>
            Are you currently using any baby apps?
          </legend>
          <p className="text-xs font-light text-mid mb-3">Select all that apply</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {APP_OPTIONS.map((app) => {
              const selected = selectedApps.includes(app);
              return (
                <button
                  type="button"
                  key={app}
                  onClick={() => toggleApp(app)}
                  className={`text-sm px-3 py-2.5 rounded-full border text-left transition-all duration-150 focus-visible:ring-2 focus-visible:ring-lilac ${
                    selected
                      ? "bg-lilac text-white border-lilac"
                      : "bg-off text-mid border-lilac-light hover:border-lilac"
                  }`}
                >
                  {app}
                </button>
              );
            })}
          </div>
        </fieldset>
      </div>

      {/* Error */}
      {formState === "error" && (
        <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-xl px-4 py-3" role="alert">
          {errorMsg}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === "loading"}
        aria-label="Submit waitlist form"
        className="w-full bg-lilac text-white font-semibold py-4 rounded-full hover:bg-lilac-dark hover:scale-[1.02] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-lilac focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 text-base"
      >
        {formState === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            adding you…
          </span>
        ) : (
          "I'm in — add me to the list ✦"
        )}
      </button>

      <p className="text-xs font-light text-mid text-center leading-[1.7]">
        No spam. Ever. Just the things you actually want to hear about.
        <br />
        Unsubscribe any time — though we think you&apos;ll want to stay. 🌸
      </p>
    </form>
  );
}
