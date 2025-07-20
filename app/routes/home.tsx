import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import CvCard from "~/components/CvCard";
import {usePuterStore} from "~/lib/puter";
import {useNavigate} from "react-router";
import {useEffect} from "react";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resunite" },
    { name: "description", content: "Intelligent feedback for your dream job" },
  ];
}

export default function Home() {
  const {auth} = usePuterStore()
  const navigate = useNavigate();

  useEffect(() => {
    if(!auth.isAuthenticated) navigate("/auth?next=/");
  }, [auth.isAuthenticated]);
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
  <section className="main-section">
    <div className="page-heading py-16">
      <h1>Track Your Applications & CV Ratings</h1>
      <h2>Review your submissions and check your AI-Powered feedback.</h2>
    </div>


    {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((cv) => (
              <CvCard key={cv.id} resume={cv}/>
          ))}
        </div>
    )}
  </section>
  </main>
}
