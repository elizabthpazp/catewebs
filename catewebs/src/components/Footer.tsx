import Link from "next/link";
import { links } from '../../links-web' 

export default function Footer({
  copy
}: {
  copy: string 
}) {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3 border-gray-500">
      <div className="text-gray-500">
        © {new Date().getFullYear()}{" "}
        &nbsp;<a
          href={links.domain}
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline transition hover:text-gray-300 underline-offset-2"
        >
          {links.username}
        </a> &nbsp;
          {copy}
      </div>
      <div className="flex space-x-4 pb-4 sm:pb-0">
        <Link
          href={links.instagram}
          className="group"
          aria-label="Contact on Instagram"
          target="_blank"
        > 
            <svg     width="25px"
            height="25px" fill="gray" className="fill-gray-500 group-hover:fill-gray-300"
            id="Layer_1" version="1.1" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg" ><g><path d="M505,257c0,34.8-0.7,69.7,0.2,104.5c1.5,61.6-37.2,109.2-86.5,130.4c-19.8,8.5-40.6,13-62.1,13c-67.3,0.1-134.7,1-202-0.3   c-50.7-1-92.4-22.2-122.3-64c-15.7-22-23.2-47-23.2-74.1c0-71.7,0-143.3,0-215c0-58.5,28.5-99.4,79.1-126C110.2,14,134.1,9.1,159,9   c65.3,0,130.7-0.4,196,0.2c50.7,0.4,93,19.8,124.2,60.6c17.4,22.8,25.8,49,25.8,77.8C505,184,505,220.5,505,257z M46,257   c0,36.7,0,73.3,0,110c0,16.4,3.8,31.8,12.3,45.7c22.3,36.5,56,54.3,97.8,55c67.1,1,134.3,0.4,201.5,0.2c16.5,0,32.5-3.4,47.4-10.5   c40.6-19.4,63.3-50.3,63.1-96.7c-0.4-71-0.1-142-0.1-213c0-20.1-5.7-38.5-17.6-54.7c-23-31.1-54.8-46.4-92.8-46.8   c-67-0.8-134-0.3-201-0.2c-14.3,0-28.1,2.9-41.5,7.9c-36.8,13.7-71,48.4-69.4,99.5C46.9,188,46,222.5,46,257z"/><path d="M257.6,363c-64.5,0-116.5-51.4-116.6-115.4c-0.1-63,52.3-114.6,116.4-114.6c64.3-0.1,116.5,51.4,116.6,114.9   C374,311.3,321.9,362.9,257.6,363z M257.6,326c43.9,0,79.5-35.1,79.4-78.3c-0.1-42.8-35.7-77.8-79.4-77.8   c-43.9,0-79.7,34.9-79.7,78C178,291.1,213.7,326.1,257.6,326z"/><path d="M387.5,98c13.5,0,24.5,11.5,24.5,25.6c-0.1,14.1-11.2,25.5-24.7,25.4c-13.3-0.1-24.2-11.5-24.2-25.3   C363,109.6,374,98,387.5,98z"/></g></svg>
        </Link>

        <Link
          href={links.github} 
          className="group"
          aria-label="TaxPal on GitHub"
          target="_blank"
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6 fill-gray-500 group-hover:fill-gray-300"
          >
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
          </svg>
        </Link>

        <Link
          href={links.telegram} 
          className="group"
          aria-label="Contact on Telegram"
          target="_blank"
        >
         <svg fill="gray" className="h-6 w-6 fill-gray-500 group-hover:fill-gray-300"
            width="22px"
            height="22px"  viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>telegram</title>
<path d="M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z"></path>
</svg>
        </Link>

        <Link
          href={links.linkedin}
          className="group"
          aria-label="Contact on Linkedin"
          target="_blank"
        >
          <svg  fill="gray" className="h-6 w-6 fill-gray-500 group-hover:fill-gray-300"
            width="21px"
            height="21px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  
	 viewBox="0 0 455 455">
<g>
	<path d="M246.4,204.35v-0.665c-0.136,0.223-0.324,0.446-0.442,0.665H246.4z"/>
	<path d="M0,0v455h455V0H0z M141.522,378.002H74.016V174.906h67.506V378.002z
		 M107.769,147.186h-0.446C84.678,147.186,70,131.585,70,112.085c0-19.928,15.107-35.087,38.211-35.087
		c23.109,0,37.31,15.159,37.752,35.087C145.963,131.585,131.32,147.186,107.769,147.186z M385,378.002h-67.524V269.345
		c0-27.291-9.756-45.92-34.195-45.92c-18.664,0-29.755,12.543-34.641,24.693c-1.776,4.34-2.24,10.373-2.24,16.459v113.426h-67.537
		c0,0,0.905-184.043,0-203.096H246.4v28.779c8.973-13.807,24.986-33.547,60.856-33.547c44.437,0,77.744,29.02,77.744,91.398V378.002
		z"/>
</g>
</svg>
        </Link>

        <Link
          href={links.tiktok}
          className="group"
          aria-label="Contact on Tiktok"
          target="_blank"
        >
          <svg 
            className="h-6 w-6 fill-gray-500 group-hover:fill-gray-300"
            fill="gray"
            width="500px"
            height="500px"
            viewBox="0 0 24 24"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
          </svg>
        </Link>

        <Link
          href={links.discord}
          className="group"
          aria-label="Contact on Discord"
          target="_blank"
        >
          <svg fill="gray" className="fill-gray-500 group-hover:fill-gray-300"
            width="25px"
            height="25px" viewBox="0 -28.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="xMidYMid">
          <g>
        <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" >
         </path></g></svg>
        </Link>
        <Link
          href={links.facebook}
          className="group"
          aria-label="Contact on Facebook"
          target="_blank"
        > 
          <svg fill="gray" className="fill-gray-500 group-hover:fill-gray-300"
            width="23px"
            height="23px" id="Layer_1" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="M258.8,507.2C120.4,507.8,6.6,392.6,9.9,251.9C13,117.9,124,7.2,262,8.7C398.7,10.2,511.8,124,508.1,264.9   C504.6,398.3,394.5,507.9,258.8,507.2z M40.2,258.3C41.3,383.6,142.9,480.1,262.9,478c116.2-2.1,214.7-96.8,214.7-220   c0-125.3-102.4-222.2-222.8-219.9C138.6,40.2,41,135.2,40.2,258.3z"/><path d="M206.8,433.4c0-58.9,0-117.3,0-176.3c-13,0-25.6,0-38.5,0c0-20,0-39.4,0-59.4c1.7-0.1,3.4-0.3,5.2-0.3   c9.3,0,18.7-0.2,28,0.1c4.1,0.1,5.5-1,5.4-5.2c-0.2-15.2-0.2-30.3-0.1-45.5c0.1-17.1,4.9-32.6,17.1-45c11.8-12,26.9-18.5,43.3-19.5   c26.4-1.5,52.9-1.3,79.4-1.8c0.3,0,0.6,0.3,1.2,0.6c0,20.1,0,40.3,0,61c-1.9,0.1-3.7,0.2-5.4,0.2c-12,0-24,0-36,0   c-12.1,0.1-19.2,7.3-19.2,19.2c0,11.3,0,22.7,0.1,34c0,0.3,0.2,0.6,0.5,1.7c19.8,0,39.8,0,60.8,0c-2.6,20.3-5,39.7-7.6,59.8   c-18.1,0-35.8,0-54,0c0,59.2,0,117.8,0,176.6C260.1,433.4,233.9,433.4,206.8,433.4z"/></g></svg>
        </Link>
        
      </div>
    </footer>
  );
}
