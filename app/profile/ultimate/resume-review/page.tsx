"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileCheck } from "lucide-react";

const ResumeReviewPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <FileCheck className="h-16 w-16 text-gray-700 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Resume Analysis</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Coming soon - Resume analysis feature is currently under development
          </p>
        </div>

        <Card className="p-8 bg-white border border-gray-200 shadow-lg mb-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Feature In Development</h2>
            <p className="text-gray-600 mb-6">
              Our resume analysis tool is being enhanced to provide better insights.
              Check back soon for updates.
            </p>
            <Button 
              className="bg-gray-800 hover:bg-gray-900"
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ResumeReviewPage;