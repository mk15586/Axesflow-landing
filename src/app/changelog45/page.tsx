import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function ChangelogPage() {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
        {/* Heading Bar */}
        <div
          className="flex items-center gap-4 px-6 py-2 rounded-full border border-[#d8dfe5] shadow mt-8"
          style={{
            background: 'rgba(241,242,251,0.9)',
            borderRadius: 60,
            boxShadow: '0px 0px 0px 2px rgba(241,242,251,0.9)',
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#d8dfe5',
            opacity: 1,
            width: 'fit-content',
            minWidth: 0,
            maxWidth: '100%',
          }}
        >
          <span style={{ opacity: 0.8, display: 'flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width={28} height={28} fill="#16101e" style={{ display: 'inline-block', flexShrink: 0 }}>
              <g>
                <path d="M216,48H56A16,16,0,0,0,40,64V184a8,8,0,0,1-16,0V88A8,8,0,0,0,8,88v96.11A24,24,0,0,0,32,208H208a24,24,0,0,0,24-24V64A16,16,0,0,0,216,48ZM176,152H96a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Z"></path>
              </g>
            </svg>
          </span>
          <span className="font-semibold text-base text-[#16101e]" style={{ marginLeft: 8 }}>Our Sayings</span>
        </div>
        {/* Main Heading and Description */}
        <div className="flex flex-col items-center mt-16 mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#18181b] text-center mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
            <span style={{ display: 'inline-block', willChange: 'transform' }}>Fresh</span>{' '}
            <span style={{ display: 'inline-block', willChange: 'transform' }}>Takes</span>{' '}
            <span style={{ display: 'inline-block', willChange: 'transform' }}>&amp;</span>{' '}
            <span style={{ display: 'inline-block', willChange: 'transform' }}>Updates</span>
          </h1>
          <p className="text-lg md:text-xl text-[#23263b] text-center font-normal opacity-85 max-w-2xl mt-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            <span style={{ display: 'inline-block', willChange: 'transform' }}>Stay</span>{' '}
            <span style={{ display: 'inline-block', willChange: 'transform' }}>informed</span>{' '}
            <span style={{ display: 'inline-block', willChange: 'transform' }}>with</span>{' '}
            <span style={{ display: 'inline-block', willChange: 'transform' }}>the</span>{' '}
            <span style={{ display: 'inline-block', willChange: 'transform' }}>latest</span>{' '}
            <span style={{ display: 'inline-block', willChange: 'transform' }}>feature</span>{' '}
            <span style={{ display: 'inline-block', willChange: 'transform' }}>rollouts,</span>{' '}
            <span style={{ display: 'inline-block', willChange: 'transform' }}>and</span>{' '}
            <span style={{ display: 'inline-block', willChange: 'transform' }}>insightful</span>{' '}
            <span style={{ display: 'inline-block', willChange: 'transform' }}>AI</span>{' '}
            <span style={{ display: 'inline-block', willChange: 'transform' }}>advancements.</span>
          </p>
        </div>
        {/* Top Bar */}
        <div className="flex flex-row gap-2 w-full max-w-2xl mx-auto bg-[#f6fbff] rounded-lg shadow-md px-2 py-2 mb-4 mt-8" style={{ borderRadius: 8, boxShadow: 'rgba(16,49,77,0.208) 0px 0.7px 0.7px -0.58px, rgba(16,49,77,0.204) 0px 1.8px 1.8px -1.17px, rgba(16,49,77,0.196) 0px 3.6px 3.6px -1.75px, rgba(16,49,77,0.184) 0px 6.9px 6.9px -2.33px, rgba(16,49,77,0.157) 0px 13.6px 13.6px -2.92px, rgba(16,49,77,0.09) 0px 30px 30px -3.5px' }}>
          <button className="px-5 py-2 rounded-md font-semibold text-base" style={{ background: 'rgb(216,223,229)', color: '#0e1c29', borderRadius: 6 }}>All Posts</button>
          <button className="px-5 py-2 rounded-md font-semibold text-base" style={{ background: 'rgba(216,223,230,0)', color: '#0e1c29', borderRadius: 6 }}>Announcements</button>
          <button className="px-5 py-2 rounded-md font-semibold text-base" style={{ background: 'rgba(216,223,230,0)', color: '#0e1c29', borderRadius: 6 }}>Changelog</button>
        </div>
      </div>

    </>
  );
}
