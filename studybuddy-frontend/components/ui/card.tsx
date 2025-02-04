import * as React from "react";

interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <div className="border rounded-lg p-4 shadow-md bg-white">{children}</div>;
};

export const CardHeader = ({ children }: CardProps) => {
  return <div className="border-b pb-2 font-bold">{children}</div>;
};

export const CardContent = ({ children }: CardProps) => {
  return <div className="mt-2">{children}</div>;
};

export const CardTitle = ({ children }: CardProps) => {
  return <h2 className="text-lg font-semibold">{children}</h2>;
};
