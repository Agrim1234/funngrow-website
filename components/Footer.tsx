import React from 'react'

const Footer = () => {
	return (
		<footer className='bg-[#1f2e40] text-white p-3 w-screen pb-7 mt-15 border-t-orange-800'>
			<div className="flex flex-col justify-center items-center gap-3 text-white">
				<img src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6390122253829667e405c893_Funngrow%20Logo.svg" height={132} width={121} loading="lazy" alt="" className="flex justify-center items-center" />
				<div className="flex gap-5 border-y-2 my-3 py-3">
					<a href="/" className="footer-link">Home</a>
					<a href="/teen#about" className="footer-link">About</a>
					<a href="/blog" className="footer-link">Blogs</a>
					<a href="/faq" className="footer-link">FAQs</a>
					<a href="/careers" className="footer-link">Careers</a>
					<a href="/investors" className="footer-link">Investors</a>
					<a href="https://portal.funngro.com/" className="footer-link">Login</a>
					<a href="/contact" className="footer-link">Contact Us</a>
					<a href="/privacy-policy" className="footer-link">Privacy Policy</a>
					<a href="/terms-and-conditions" className="footer-link">Terms &amp; Conditions</a>
				</div>
				<p className="my-4 ">Enable Smart Teenagers and Smart Companies to realize their full potentials. It’s fun to grow.</p>
				<div className="flex items-center gap-5">
					<div className="text-block">Download&nbsp;App</div>
					<div className="flex gap-2">
						<a href="https://play.google.com/store/apps/details?id=com.wishbanc.funngro" className="download-app-cta w-inline-block">
							<img src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638c80744c238bae49b47ff4_image%2027.png" loading="lazy" alt="Get it on Google Play Banner" className="image-full-width" height={49} width={132}/>
						</a>
						<a href="https://apps.apple.com/in/app/funngro/id1579361075" className="download-app-cta w-inline-block">
							<img src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638c80746a8a27189ca05fb9_image%2029.png" loading="lazy" alt="Download on the App Store Banner" className="image-full-width" height={49} width={132}/>
						</a>
					</div>
				</div>
				<div className="flex gap-5">
					<a href="https://www.facebook.com/funngro" target="_blank" className="w-inline-block"><div className="footer-social-icon w-embed">
						<img src='/facebook.svg' height={24} width={24} />
					</div>
					</a>
					<a href="https://twitter.com/funngro" target="_blank" className="w-inline-block">
						<div className="footer-social-icon w-embed">
							<img src='/twitter.svg' height={24} width={24} />
						</div>
					</a>
					<a href="https://www.youtube.com/channel/UCUj8Nqr-M7gVtXYBTB7_usA" target="_blank" className="w-inline-block">
						<div className="footer-social-icon w-embed">
							<img src='/youtube.svg' height={24} width={24} />
						</div>
					</a>
					<a href="https://www.instagram.com/funngro" target="_blank" className="w-inline-block"><div className="footer-social-icon w-embed">
						<img src='/instagram.svg' height={24} width={24} />
					</div>
					</a>
					<a href="https://discord.gg/funngro" target="_blank" className="w-inline-block">
						<div className="footer-social-icon w-embed">
							<img src='/discord.svg' height={24} width={24} />
						</div>
					</a>
					<a href="https://www.linkedin.com/company/funngro/" target="_blank" className="w-inline-block"><div className="footer-social-icon w-embed">
						<img src='/linkedin.svg' height={24} width={24} />
					</div>
					</a>
					<a href="https://wa.me/918828410412" target="_blank" className="w-inline-block">
						<div className="footer-social-icon w-embed">
							<img src='/whatsapp.svg' height={24} width={24} />
						</div>
					</a>
				</div><p className="text-footer">©All Copyrights reserved 2023 By <span className="text-color-dark-green">FUNNGRO</span></p></div>
		</footer>
	)
}

export default Footer