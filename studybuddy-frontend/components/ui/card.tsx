import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div className={`border rounded-lg p-4 shadow-md bg-white ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className, ...props }: CardProps) => {
  return (
    <div className={`border-b pb-2 font-bold ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className, ...props }: CardProps) => {
  return (
    <div className={`mt-2 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className, ...props }: CardProps) => {
  return (
    <h2 className={`text-lg font-semibold ${className}`} {...props}>
      {children}
    </h2>
  );
};
