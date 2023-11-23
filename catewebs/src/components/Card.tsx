export const Card = ({
    title,
    description,
    icon
  }: { 
    title: string ,
    description: string ,
    icon: string ,
  }) => {
    return (
        <div className="relative w-auto mx-4 max-w-[350px] min-h-fit text-center justify-center flex flex-col mt-6 text-gray-700 shadow-xl rounded-xl bg-clip-border light:bg-purple-300 dark:bg-slate-2 bg-purple-300 light:text-gray-700 dark:text-white text-gray-700 border-2 border-purple-600">
        <div className="p-6 mb-3 text-center justify-center">
          <div className="imageCard mb-2">

          <svg style={icon == 'regard'? {display:'block'}:{display:'none'}} width={50} height={50} fill="rgb(147 51 234)" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M34,9.51H27.85a3.72,3.72,0,0,0,.87-4.6,3.49,3.49,0,0,0-2.14-1.72,3.27,3.27,0,0,0-2.6.39,11.93,11.93,0,0,0-4,4.78,11.88,11.88,0,0,0-4-4.78,3.24,3.24,0,0,0-2.59-.39,3.4,3.4,0,0,0-2.14,1.72,3.72,3.72,0,0,0,.87,4.6h-6a2.6,2.6,0,0,0-2.6,2.6v6.44a2.6,2.6,0,0,0,2,2.51V34.32a2.6,2.6,0,0,0,2.6,2.6h23a3.44,3.44,0,0,0,3.44-3.44V21.06a2.6,2.6,0,0,0,2-2.51V12.11A2.61,2.61,0,0,0,34,9.51ZM17.73,19.39V11.25l.68,0c.39,0,.72,0,1,0H20.6c.27,0,.6,0,1,0l.84,0v8.15ZM24.88,5h0a1.62,1.62,0,0,1,1.25-.19,1.71,1.71,0,0,1,1.08.88,2,2,0,0,1-.64,2.61,9.1,9.1,0,0,1-4.21,1.17h-1A10.81,10.81,0,0,1,24.88,5ZM13.43,8.34a2,2,0,0,1-.64-2.61,1.72,1.72,0,0,1,1.07-.88,2,2,0,0,1,.41,0,1.6,1.6,0,0,1,.84.24,10.65,10.65,0,0,1,3.53,4.47h-1A9.17,9.17,0,0,1,13.43,8.34ZM5.3,12.11a.87.87,0,0,1,.88-.87H16v8.15H6a.87.87,0,0,1-.72-.84ZM8.14,35.2a.87.87,0,0,1-.88-.88V21.15H16L16,35.2Zm9.59,0,0-14.05h4.7l0,14.05Zm13.45,0h-7l0-14.05H32.9V33.48A1.72,1.72,0,0,1,31.18,35.2Zm3.68-16.65a.87.87,0,0,1-.72.84h-10V11.24H34a.88.88,0,0,1,.88.87Z"/></svg>
 
            <svg style={icon == ''? {display:'block'}:{display:'none'}}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-12 h-12 mb-4 text-purple-600"><path 
              d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
            <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"></path>
          </svg>

          <svg style={icon == 'buy'? {display:'block'}:{display:'none'}} fill="rgb(147 51 234)" width={50} height={50} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 19.25 19.25"><g><g id="Layer_1_107_"><g><path d="M19.006,2.97c-0.191-0.219-0.466-0.345-0.756-0.345H4.431L4.236,1.461
				C4.156,0.979,3.739,0.625,3.25,0.625H1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1.403l1.86,11.164c0.008,0.045,0.031,0.082,0.045,0.124
				c0.016,0.053,0.029,0.103,0.054,0.151c0.032,0.066,0.075,0.122,0.12,0.179c0.031,0.039,0.059,0.078,0.095,0.112
				c0.058,0.054,0.125,0.092,0.193,0.13c0.038,0.021,0.071,0.049,0.112,0.065c0.116,0.047,0.238,0.075,0.367,0.075
				c0.001,0,11.001,0,11.001,0c0.553,0,1-0.447,1-1s-0.447-1-1-1H6.097l-0.166-1H17.25c0.498,0,0.92-0.366,0.99-0.858l1-7
				C19.281,3.479,19.195,3.188,19.006,2.97z M17.097,4.625l-0.285,2H13.25v-2H17.097z M12.25,4.625v2h-3v-2H12.25z M12.25,7.625v2
				h-3v-2H12.25z M8.25,4.625v2h-3c-0.053,0-0.101,0.015-0.148,0.03l-0.338-2.03H8.25z M5.264,7.625H8.25v2H5.597L5.264,7.625z
				 M13.25,9.625v-2h3.418l-0.285,2H13.25z"/><circle cx="6.75" cy="17.125" r="1.5"/><circle cx="15.75" cy="17.125" r="1.5"/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>

          </div>
          <h5 className="block mb-2 font-sans text-xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
           {title}
          </h5>
          <p className="block font-sans light:text-gray-700 dark:text-gray-300 text-gray-700 antialiased font-semibold leading-relaxed">
            {description}
          </p>
        </div> 
      </div>
    );
  };