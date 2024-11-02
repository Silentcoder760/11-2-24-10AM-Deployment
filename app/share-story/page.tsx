"use client";

import { useState, useRef } from "react";
import { Mic, StopCircle, Play, Pause, Loader2, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ShareStoryPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState("");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      chunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        chunksRef.current.push(e.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(chunksRef.current, { type: "audio/wav" });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        processAudio(audioBlob);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) {
      toast.error("Unable to access microphone");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const processAudio = async (audioBlob: Blob) => {
    setIsProcessing(true);
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setTranscript("Your story has been transcribed and will be featured in our podcast series...");
    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Mic className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Share Your Transition Story
            </h1>
            <p className="text-muted-foreground">
              Record your military transition experience to inspire and guide others.
              Your story will be featured in our veteran transition podcast series.
            </p>
          </div>

          <Card className="p-6 bg-card border-border">
            <div className="space-y-6">
              {/* Recording Controls */}
              <div className="flex justify-center gap-4">
                {!isRecording ? (
                  <Button
                    size="lg"
                    onClick={startRecording}
                    className="gap-2"
                    disabled={isProcessing}
                  >
                    <Mic className="w-5 h-5" />
                    Start Recording
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    variant="destructive"
                    onClick={stopRecording}
                    className="gap-2"
                  >
                    <StopCircle className="w-5 h-5" />
                    Stop Recording
                  </Button>
                )}
              </div>

              {/* Audio Playback */}
              {audioUrl && (
                <div className="flex items-center justify-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={togglePlayback}
                    disabled={isProcessing}
                  >
                    {isPlaying ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </Button>
                  <audio
                    ref={audioRef}
                    src={audioUrl}
                    onEnded={() => setIsPlaying(false)}
                    className="hidden"
                  />
                  <span className="text-sm text-muted-foreground">
                    Review your recording
                  </span>
                </div>
              )}

              {/* Processing Status */}
              {isProcessing && (
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Processing your story...</span>
                </div>
              )}

              {/* Story Details Form */}
              {transcript && (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">
                      Your Name
                    </label>
                    <Input className="mt-1" placeholder="Name and Rank (Optional)" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">
                      Service Branch & Years
                    </label>
                    <Input className="mt-1" placeholder="e.g., Army 2010-2020" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">
                      Current Role
                    </label>
                    <Input className="mt-1" placeholder="Your civilian career" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">
                      Story Transcript
                    </label>
                    <Textarea
                      className="mt-1"
                      value={transcript}
                      rows={6}
                      readOnly
                    />
                  </div>
                  <Button className="w-full gap-2">
                    <Share2 className="w-4 h-4" />
                    Submit Your Story
                  </Button>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}