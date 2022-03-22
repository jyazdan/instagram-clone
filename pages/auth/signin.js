import { getProviders, signIn as signIntoProvider } from "next-auth/react";
import Header from "../../components/Header";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/router";

function signIn({ providers }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()

  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <p className="font-xs italic">
         <b> This is not the official Instagram application.</b> Built for educational 
          purposes only. 
          <br />
         <b>Note:</b> Continuing as a Guest prevents you from posting, liking, and commenting in the application.
        </p>
        <br />
        <p className="font-xs">Developed by: Jonathan Yazdanpanah</p>
        <div className="flex mt-6 h-1">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jyazdan"
            className="mr-10 profileBtn"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/jonathan-yazdanpanah"
          >
            <FaLinkedin className="text-3xl profileBtn" />
          </a>
        </div>
        <div className="mt-[70px]">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() =>
                  signIntoProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
              <br />
              <button className="py-2 px-5 mt-[20px] bg-emerald-500 rounded-lg text-white" onClick={() => router.push('/')}>Continue as Guest</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

export default signIn;
