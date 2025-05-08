"use client";

import React from "react";
import NetworkBackground from "@/app/components/Background";

const DevelopmentServices = () => {
  return (
    <div className="relative w-full px-8 py-16 overflow-hidden">
      <NetworkBackground />
      <h2 className="text-4xl text-center font-bold text-gray-800 dark:text-white mb-8">
        Development Services
      </h2>
      <div className="max-w-4xl mx-auto text-lg text-gray-700 dark:text-gray-300">
        <div className="relative z-10 w-full px-8 py-16 bg-white dark:bg-[#1e1e1e] rounded-xl shadow-lg">
          <div className="max-w-4xl mx-auto">
            <p className="mb-6">
              I build scalable and reliable apps—web, mobile, and backend— using
              modern technologies tailored to project needs.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Web Development
            </h3>
            <p className="mb-6">
              From responsive UIs to robust APIs, I craft full-stack web
              solutions optimized for performance and UX.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Mobile App Development
            </h3>
            <p className="mb-6">
              I develop cross-platform mobile apps for iOS and Android,
              combining functionality with smooth performance.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Backend Development
            </h3>
            <p className="mb-6">
              I build scalable, secure backends with Node.js, GraphQL, and
              modern databases to power your applications.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Technologies I Use
            </h3>
            <ul className="list-disc pl-8 text-gray-700 dark:text-gray-300">
              <li>React, Angular, Vue.js</li>
              <li>Node.js, Express.js</li>
              <li>MongoDB, PostgreSQL, MySQL</li>
              <li>GraphQL, REST APIs</li>
              <li>Swift, Kotlin</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentServices;
