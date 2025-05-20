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
          <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
            {Array.isArray(breadcrumb) ? (
              <>
                <span id="breadcrumb-home" className="text-gray-500">Dashboard</span>
                <span id="breadcrumb-separator" className="text-gray-500">/</span>
                {breadcrumb.map((item, index) => (
                  <React.Fragment key={index}>
                    <span id={`breadcrumb-${index}`} className="text-gray-500">{item}</span>
                    {index < breadcrumb.length - 1 && (
                      <span id="breadcrumb-separator" className="text-gray-500">/</span>
                    )}
                  </React.Fragment>
                ))}
              </>
            ) : (
              <>
                <span id="breadcrumb-home" className="text-gray-500">Dashboard</span>
                <span id="breadcrumb-separator" className="text-gray-500">/</span>
                <span id="breadcrumb-current" className="text-gray-500">{breadcrumb}</span>
              </>
            )}
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