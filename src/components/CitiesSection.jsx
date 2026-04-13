import { useState } from "react";
import { popularCities } from "../data";
import { SectionHeader } from "./ui";

export default function CitiesSection() {
  const [activeCity, setActiveCity] = useState(null);

  return (
    <section className="mb-11">
      <SectionHeader
        title="City ke hisaab se Colleges"
        subtitle="Apne shahar ke best colleges dhundho"
        link="Sab Cities"
      />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-2.5">
        {popularCities.map((city, i) => {
          const isActive = activeCity === city.name;
          return (
            <div
              key={i}
              onClick={() => setActiveCity(isActive ? null : city.name)}
              className={`rounded-xl px-3.5 py-4 cursor-pointer text-center transition-all duration-200 border ${
                isActive
                  ? "bg-blue-600 border-blue-600"
                  : "bg-white border-slate-200 hover:border-blue-500 hover:-translate-y-0.5"
              }`}
            >
              <div className="text-[28px] mb-1.5">{city.icon}</div>
              <p className={`font-bold text-sm m-0 ${isActive ? "text-white" : "text-slate-800"}`}>
                {city.name}
              </p>
              <p className={`text-[11px] mt-0.5 m-0 ${isActive ? "text-blue-200" : "text-slate-500"}`}>
                {city.colleges} Colleges
              </p>
            </div>
          );
        })}
      </div>

      {activeCity && (
        <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl px-5 py-4 flex items-center justify-between">
          <div>
            <p className="font-bold text-[#1a3a5c] text-[15px] m-0">📍 {activeCity} ke colleges dekho</p>
            <p className="text-slate-500 text-[13px] mt-0.5 m-0">Engineering, Medical, MBA aur bahut kuch</p>
          </div>
          <button className="bg-blue-600 text-white border-none rounded-lg px-5 py-2.5 font-bold text-[13px] cursor-pointer hover:bg-blue-700 transition-colors whitespace-nowrap">
            Explore {activeCity} →
          </button>
        </div>
      )}
    </section>
  );
}
