import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function MemeGenerator() {
  const [meme, setMeme] = useState(null);

  const fetchMeme = async () => {
    const res = await fetch("https://api.imgflip.com/get_memes");
    const data = await res.json();
    const randomMeme = data.data.memes[Math.floor(Math.random() * data.data.memes.length)];
    setMeme(randomMeme);
  };

  useEffect(() => {
    fetchMeme();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Random Meme Generator</h1>
      <Card className="w-full max-w-md">
        <CardContent className="p-4 flex flex-col items-center">
          {meme && <img src={meme.url} alt={meme.name} className="rounded-lg shadow-lg max-w-full" />}
          <Button className="mt-4" onClick={fetchMeme}>Generate New Meme</Button>
        </CardContent>
      </Card>
    </div>
  );
}
