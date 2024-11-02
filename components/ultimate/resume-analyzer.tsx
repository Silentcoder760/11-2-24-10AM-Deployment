"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { FileText, Upload, AlertTriangle, CheckCircle, Award, Star, FileCheck } from "lucide-react";
import { toast } from "sonner";

interface ResumeAnalysis {
  score: number;
  recommendations: {
    category: string;
    items: string[];
    priority: 'high' | 'medium' | 'low';
  }[];
  missingElements: string[];
}

export function ResumeAnalyzer() {
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<ResumeAnalysis | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      analyzeResume(file);
    }
  };

  const analyzeResume = async (file: File) => {
    setAnalyzing(true);
    // Simulate analysis delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock analysis result
    setAnalysis({
      score: 75,
      recommendations: [
        {
          category: "Military Awards",
          items: [
            "Include specific award citations and impact",
            "Highlight unit achievements and personal contributions",
            "Quantify results of decorated actions"
          ],
          priority: 'high'
        },
        {
          category: "Performance Evaluations",
          items: [
            "Extract key achievements from NCOERs/OERs",
            "Include specific leadership metrics",
            "Highlight training and mentorship accomplishments"
          ],
          priority: 'high'
        },
        {
          category: "Skills Translation",
          items: [
            "Translate military jargon to civilian terms",
            "Focus on transferable leadership skills",
            "Emphasize project management experience"
          ],
          priority: 'medium'
        }
      ],
      missingElements: [
        "Security clearance details",
        "Certification expiration dates",
        "Civilian equivalent titles"
      ]
    });

    setAnalyzing(false);
    toast.success("Resume analysis complete");
  };

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <Card className="p-6 bg-gradient-to-br from-zinc-900 to-zinc-800 border border-slate-700">
        <div className="text-center">
          <FileText className="h-12 w-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-200 mb-2">
            Resume Analysis
          </h3>
          <p className="text-slate-400 mb-6">
            Upload your resume for AI-powered analysis and recommendations
          </p>
          
          <div className="flex items-center justify-center">
            <Label 
              htmlFor="resume-upload"
              className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-600 border-dashed rounded-lg cursor-pointer hover:border-slate-500 bg-zinc-900/50"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="h-8 w-8 text-slate-400 mb-2" />
                <p className="text-sm text-slate-400">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-slate-500">PDF, DOC, or DOCX (max. 10MB)</p>
              </div>
              <Input
                id="resume-upload"
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
              />
            </Label>
          </div>
        </div>
      </Card>

      {/* Analysis Progress */}
      {analyzing && (
        <Card className="p-6 bg-zinc-900/50 border border-slate-700">
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-300">Analyzing Resume...</span>
              <span className="text-slate-400">75%</span>
            </div>
            <Progress value={75} className="h-2 bg-slate-700" />
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <FileCheck className="h-4 w-4 animate-pulse" />
              <span>Scanning for military experience and achievements</span>
            </div>
          </div>
        </Card>
      )}

      {/* Analysis Results */}
      {analysis && (
        <div className="space-y-6">
          {/* Score Card */}
          <Card className="p-6 bg-gradient-to-br from-zinc-900 to-zinc-800 border border-slate-700">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-slate-200">Resume Score</h3>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-blue-400">{analysis.score}</span>
                <span className="text-slate-400">/100</span>
              </div>
            </div>
            <Progress value={analysis.score} className="h-2 mt-4 bg-slate-700" />
          </Card>

          {/* Recommendations */}
          <Card className="p-6 bg-zinc-900/50 border border-slate-700">
            <h3 className="text-xl font-semibold text-slate-200 mb-4">Recommendations</h3>
            <div className="space-y-6">
              {analysis.recommendations.map((rec, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-blue-400" />
                    <h4 className="font-semibold text-slate-300">{rec.category}</h4>
                    {rec.priority === 'high' && (
                      <span className="px-2 py-1 text-xs font-medium bg-red-500/10 text-red-400 rounded-full">
                        High Priority
                      </span>
                    )}
                  </div>
                  <ul className="space-y-2 pl-7">
                    {rec.items.map((item, i) => (
                      <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                        <Star className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          {/* Missing Elements */}
          <Card className="p-6 bg-zinc-900/50 border border-slate-700">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="h-5 w-5 text-amber-400" />
              <h3 className="text-xl font-semibold text-slate-200">Missing Elements</h3>
            </div>
            <ul className="space-y-2">
              {analysis.missingElements.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-400">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
              Download Detailed Report
            </Button>
            <Button className="flex-1" variant="outline">
              Schedule Review Session
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}