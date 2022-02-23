import Head from 'next/head'

export default function Home() {
  return (
    <div className='flex'>
      <Head>
        <title>KTSnowy</title>
        <meta name='description" content="KTSnowy | Software Developer' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <section className='relative min-h-screen lg:min-w-[650px] bg-neutral-900 text-neutral-100 px-8 background-drop-shadow'>
        <header className='pt-12 pb-20 ml-4 mr-12'>
          <h1 className='text-4xl'><b className='text-[#AEE9E0]'>KT</b>Snowy</h1>
        </header>
        <main className='ml-4 mr-12'>
          <h2 className='font-bold text-xl py-4'>Software Developer</h2>
          <p className='font-extralight leading-10 text-neutral-400 text-3xl md:text-4xl pb-16'>Frontend Development</p>
          <h2 className='font-bold text-xl py-4'>Skills</h2>
          <p className='font-extralight leading-10 text-neutral-400 text-3xl md:text-4xl pb-4'>Javascript / HTML / CSS</p>
          <p className='font-extralight leading-10 text-neutral-400 text-3xl md:text-4xl pb-16'>NodeJS / ReactJS</p>
          <h2 className='font-bold text-xl py-4'>Contact me at:</h2>
          <p className='font-extralight transition ease-in-out w-fit text-neutral-400 hover:text-neutral-200 text-3xl md:text-4xl pb-4'>
            <a href='https://github.com/ktsnowy' rel='noopener noreferrer' target='_blank'>GitHub</a>
          </p>
          <p className='font-extralight transition ease-in-out w-fit text-neutral-400 hover:text-neutral-200 text-3xl md:text-4xl pb-4'>
            <a href='https://www.linkedin.com/in/ktsnowy/' rel='noopener noreferrer' target='_blank'>LinkedIn</a>
          </p>
          <p className='font-extralight transition ease-in-out w-fit text-neutral-400 hover:text-neutral-200 text-3xl md:text-4xl pb-24'>
            <a href='mailto:keith@ktsnowy.com?subject=To KTSnowy: Contact me'>Email</a>
          </p>
        </main>
        <footer className='absolute bottom-0 left-0 mx-12 py-6'>
          <p className='text-neutral-600 text-sm'>© KTSnowy (Keith Taylor) 2022</p>
          <p className='text-neutral-600 text-sm'>
            <a href='https://heropatterns.com/' rel='noopener noreferrer' target='_blank'>Pattern by Hero Patterns</a>
          </p>
        </footer>
      </section>
      <section className='min-h-screen flex-grow background-graph'>
      </section>
    </div>
  )
}
