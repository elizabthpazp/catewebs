"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher({ 
  classNameProp
}: { 
  classNameProp: string ,
}) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
 
  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null
 
  return ( 
<div>
<div className={classNameProp} onClick={() => setTheme(theme=='dark' ? 'light' : 'dark')}>

<div style={ theme == 'dark' ? {display: 'block'} : {display: 'none'} }>
<svg version="1.1" id="Capa_1" width="25" height="25" fill="#fff" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" 
	 viewBox="0 0 438.277 438.277">
<g>
	<path d="M428.756,300.104c-0.664-3.81-2.334-7.047-4.996-9.713c-5.9-5.903-12.752-7.142-20.554-3.716
		c-20.937,9.708-42.641,14.558-65.097,14.558c-28.171,0-54.152-6.94-77.943-20.838c-23.791-13.894-42.631-32.736-56.525-56.53
		c-13.899-23.793-20.844-49.773-20.844-77.945c0-21.888,4.333-42.683,12.991-62.384c8.66-19.7,21.176-36.973,37.543-51.82
		c6.283-5.898,7.713-12.752,4.287-20.557c-3.236-7.801-9.041-11.511-17.415-11.132c-29.121,1.141-56.72,7.664-82.797,19.556
		C111.33,31.478,88.917,47.13,70.168,66.548c-18.747,19.414-33.595,42.399-44.54,68.95c-10.942,26.553-16.416,54.39-16.416,83.511
		c0,29.694,5.806,58.054,17.416,85.082c11.613,27.028,27.218,50.344,46.824,69.949c19.604,19.599,42.92,35.207,69.951,46.822
		c27.028,11.607,55.384,17.415,85.075,17.415c42.64,0,81.987-11.563,118.054-34.69c36.069-23.124,63.05-54.006,80.944-92.645
		C429,307.519,429.427,303.906,428.756,300.104z M306.565,384.168c-24.646,11.711-50.676,17.562-78.087,17.562
		c-24.743,0-48.39-4.853-70.947-14.558c-22.554-9.705-41.971-22.695-58.246-38.972c-16.271-16.272-29.259-35.686-38.97-58.241
		c-9.707-22.556-14.561-46.203-14.561-70.948c0-40.922,12.135-77.466,36.403-109.636c24.266-32.165,55.531-53.959,93.788-65.379
		c-19.795,31.405-29.694,65.379-29.694,101.926c0,34.644,8.564,66.715,25.697,96.223c17.128,29.499,40.446,52.811,69.95,69.948
		c29.499,17.129,61.565,25.694,96.211,25.694c10.656,0,21.129-0.855,31.408-2.57C352.199,356.155,331.21,372.472,306.565,384.168z"
		/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
 </div>
 
<div style={ theme == 'dark' ? {display: 'none'} : {display: 'block', marginTop:'1px'} }> 
 <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	viewBox="0 0 612 612" width="30" height="30" fill="black">
<g>
	<g id="_x37__5_">
		<g>
			<path d="M76.5,286.875H19.125C8.568,286.875,0,295.443,0,306c0,10.557,8.568,19.125,19.125,19.125H76.5
				c10.557,0,19.125-8.568,19.125-19.125C95.625,295.443,87.057,286.875,76.5,286.875z M306,95.625
				c10.557,0,19.125-8.568,19.125-19.125V19.125C325.125,8.568,316.557,0,306,0c-10.557,0-19.125,8.568-19.125,19.125V76.5
				C286.875,87.057,295.443,95.625,306,95.625z M490.002,148.792l40.182-40.182c7.401-7.401,7.401-19.393,0-26.794
				s-19.394-7.401-26.795,0l-40.182,40.182c-7.401,7.401-7.401,19.393,0,26.794C470.609,156.194,482.601,156.194,490.002,148.792z
				 M141.716,443.509l-40.182,40.182c-7.401,7.401-7.401,19.393,0,26.794s19.393,7.401,26.794,0l40.182-40.182
				c7.401-7.401,7.401-19.393,0-26.794S149.118,436.107,141.716,443.509z M130.203,157.246c7.478,7.478,19.584,7.478,27.042,0
				c7.459-7.478,7.459-19.584,0-27.042L116.682,89.62c-7.478-7.478-19.584-7.478-27.043,0c-7.478,7.478-7.478,19.584,0,27.043
				L130.203,157.246z M306,516.375c-10.557,0-19.125,8.568-19.125,19.125v57.375c0,10.557,8.568,19.125,19.125,19.125
				c10.557,0,19.125-8.568,19.125-19.125V535.5C325.125,524.943,316.557,516.375,306,516.375z M481.797,454.754
				c-7.478-7.478-19.584-7.478-27.043,0c-7.478,7.479-7.478,19.584,0,27.043l40.564,40.564c7.478,7.478,19.584,7.478,27.043,0
				c7.459-7.479,7.478-19.584,0-27.043L481.797,454.754z M592.875,286.875H535.5c-10.557,0-19.125,8.568-19.125,19.125
				c0,10.557,8.568,19.125,19.125,19.125h57.375c10.557,0,19.125-8.568,19.125-19.125C612,295.443,603.432,286.875,592.875,286.875z
				 M306,133.76c-95.128,0-172.24,77.112-172.24,172.24S210.872,478.24,306,478.24S478.24,401.128,478.24,306
				S401.128,133.76,306,133.76z M306,439.837c-73.918,0-133.837-59.919-133.837-133.837S232.082,172.163,306,172.163
				S439.837,232.082,439.837,306S379.918,439.837,306,439.837z"/>
		</g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
  </div>
</div>     
</div>
  )
};