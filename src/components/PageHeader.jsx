// src/components/PageHeader.jsx
import React from 'react';

function PageHeader({ title, breadcrumb, children }) {
  return (
    <div id="pageheader-container" className="flex items-center justify-between p-4">
      <div id="pageheader-left" className="flex flex-col">
        {title && (
          <span id="page-title" className="text-3xl font-semibold">
            {title}
          </span>
        )}
        {breadcrumb && (
          // <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
          //   {Array.isArray(breadcrumb) ? (
          //     <>
          //       <span id="breadcrumb-home" className="text-gray-500">Dashboard</span>
          //       <span id="breadcrumb-separator" className="text-gray-500">/</span>
          //       {breadcrumb.map((item, index) => (
          //         <React.Fragment key={index}>
          //           <span id={`breadcrumb-${index}`} className="text-gray-500">{item}</span>
          //           {index < breadcrumb.length - 1 && (
          //             <span id="breadcrumb-separator" className="text-gray-500">/</span>
          //           )}
          //         </React.Fragment>
          //       ))}
          //     </>
          //   ) : (
          //     <>
          //       <span id="breadcrumb-home" className="text-gray-500">Dashboard</span>
          //       <span id="breadcrumb-separator" className="text-gray-500">/</span>
          //       <span id="breadcrumb-current" className="text-gray-500">{breadcrumb}</span>
          //     </>
          //   )}
          // </div>
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 stroke-current">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 stroke-current">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                  </svg>
                  Documents
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 stroke-current">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  Add Document
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
      {children && (
        <div id="action-button">
          {children}
        </div>
      )}
    </div>
  );
}

export default PageHeader;