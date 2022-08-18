import { Faq } from '../components/faq'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

export default function Home() {
  const teams = [
    {
      img: `/team1.png`,
      name: ``,
      role: `Co-Founder`,
      job: `Game Developer`,
      twitter: {
        name: `@0x`,
        link: `https://www.google.com`
      },
      discord: {
        name: `#5955`,
        link: `https://www.google.com`
      }
    },
    {
      img: `/team2.png`,
      name: `d`,
      role: `Co-Founder`,
      job: `Game Developer`,
      twitter: {
        name: `@0x`,
        link: `https://www.google.com`
      },
      discord: {
        name: `#5955`,
        link: `https://www.google.com`
      }
    },
    {
      img: `/team3.png`,
      name: `d`,
      role: `Co-Founder`,
      job: `Game Developer`,
      twitter: {
        name: `@0x`,
        link: `https://www.google.com`
      },
      discord: {
        name: `#5955`,
        link: `https://www.google.com`
      }
    },
    {
      img: `/team4.png`,
      name: `d`,
      role: `Lead`,
      job: `Solidity Developer`,
      twitter: {
        name: `@0x`,
        link: `https://www.google.com`
      },
      discord: {
        name: `#5955`,
        link: `https://www.google.com`
      }
    },
    {
      img: `/team5.png`,
      name: `d`,
      role: `Lead`,
      job: `Front End Developer`,
      twitter: {
        name: `@0x`,
        link: `https://www.google.com`
      },
      discord: {
        name: `#5955`,
        link: `https://www.google.com`
      }
    },
    {
      img: `/team6.png`,
      name: `d`,
      role: `Lead`,
      job: `Technical Project Manager`,
      twitter: {
        name: `@0x`,
        link: `https://www.google.com`
      },
      discord: {
        name: `#5955`,
        link: `https://www.google.com`
      }
    },
    {
      img: `/team7.png`,
      name: `d`,
      role: `Lead`,
      job: `Secret Project V`,
      twitter: {
        name: `@0x`,
        link: `https://www.google.com`
      },
      discord: {
        name: `#5955`,
        link: `https://www.google.com`
      }
    },
    {
      img: `/team8.png`,
      name: `d`,
      role: `Lead`,
      job: `Marketing`,
      twitter: {
        name: `@0x`,
        link: `https://www.google.com`
      },
      discord: {
        name: `#5955`,
        link: `https://www.google.com`
      }
    }
  ];
  const faq = [
    {
      ques: `When is the mint?`,
      answar: `Hit the notification alert on our twitter to get notified when the mint is starting. It will be a stealth drop.`
    },
    {
      ques: `How much is 1 Degenerate Avatar mint cost?`,
      answar: `1 Degenerate Avatar costs 0.015 ETH to mint.`
    },
    {
      ques: `What is the max supply?`,
      answar: `There will be 5,555 Degenerate Avatars that will be mintable.`
    },
    {
      ques: `When will the P2E Ecosystem come?`,
      answar: `The P2E Ecosystem is already being develop and being worked on. The Tokenomics of the $LDEXP will be provided in due time.`
    },
  ];
  
  return (
    <div>
      <section className="home" id="home">
        <div className="content-home">
          <img src="/logo-4.png" className="logo" alt="logo" />
          <p>A Gamified Community of Degens</p>
          <div className="buttons">
            <button
              className="btn"
              onClick={() => window.open("https://game.loreofdegenerates.com")}
            >
              <span>PLAY GAME</span>
            </button>
            <button
              className="btn btn-primary"
              onClick={() => window.open("https://mint.loreofdegenerates.com")}
            >
              <span>MINT</span>
            </button>
          </div>
        </div>
      </section>
      <section className="introduction" id="introduction">
        <div className="container">
          <div className="title"> INTRODUCTION </div>
          <p>Lore of Degenerates is a NFT project that is developing a game to keep the degens busy during hard times.</p>
          <p>Each Degenerate Avatar can already be played in the LoreOfDegenerate Game, and chat, hang, fight together with their fellow degens.</p>
          <p>Aside from being able to play the Degenerate Avatar right after minting it, they also have their own unique utilities like token generation, airdrops, and many more.</p>
          {/* <div className="row mt-4">
            <div className="col-md-3 col-all-6">
              <img src="/introduction1.png" alt="introduction" />
            </div>
            <div className="col-md-3 col-all-6">
              <img src="/introduction2.png" alt="introduction" />
            </div>
            <div className="col-md-3 col-all-6">
              <img src="/introduction3.png" alt="introduction" />
            </div>
            <div className="col-md-3 col-all-6">
              <img src="/introduction4.png" alt="introduction" />
            </div>
          </div> */}
        </div>
      </section>
      <section className="classes" id="classes">
        <div className="container">
          <div className="title"> CLASSES </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card-allies">
                <img src="/assassin.png" alt="allies" />
                <div>
                  <div className="title-card">Assassin</div>
                  <div className="desc-card">The Assassin class are able to decimate their enemies in a swift and cool fashion. Utilizing Dual Daggers and Khopesh as their weapon of choice.</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-allies">
                <img src="/Marksman.png" alt="allies" />
                <div>
                  <div className="title-card">Marksman</div>
                  <div className="desc-card">Hit from afar, and never get hurt. A very good saying of the great Marksman class.</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-allies">
                <img src="/Mercenary.png" alt="allies" />
                <div>
                  <div className="title-card">Mercenary</div>
                  <div className="desc-card">Taking every quest that goes their way, while fighting every challenge the story brings em. The Mercenary Class is the one to go for.</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-allies">
                <img src="/Pikeman.png" alt="allies" />
                <div>
                  <div className="title-card">Pikeman</div>
                  <div className="desc-card">Being at wars made them into the monster they are today. Pikeman Class with their spear are very pokey.</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-allies">
                <img src="/Knight.png" alt="allies" />
                <div>
                  <div className="title-card">Knight</div>
                  <div className="desc-card">Being part of the Royal Family, the Knight Class are complete with their iron blooded skills to vanish and slaughter anyone that harms their kin.</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-allies">
                <img src="/Berserker.png" alt="allies" />
                <div>
                  <div className="title-card">Berserker</div>
                  <div className="desc-card">Does not care about anything, treasures? NO. dreams? NO. FIGHTS? YES. WARS? YES. DUNGEONS? YES. The Berserker Class just want to unleash hell on everything they see.</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-allies">
                <img src="/Wizard.png" alt="allies" />
                <div>
                  <div className="title-card">Wizard</div>
                  <div className="desc-card">Studying everything that interests them, the Wizard Class managed to unlock the mystery of the different elements surrounding our world.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="levelup" id="levelup">
        <div className="container">
          <div className="title"> LEVEL UP </div>
          <p>Do dungeons and fight your way to the end to gain experience and level up.</p>
          <p>Levelling up will open up more skills to use, more systems to unlock, and more dungeons to do.</p>
          {/* <img src="/train.gif" alt="train" /> */}
        </div>
      </section>
      <section className="dungeons" id="dungeons">
        <div className="container">
          <div className="title"> DUNGEONS &amp; RAIDS </div>
          <p>There are different dungeons that will be on the LoreOfDegenerates Game.</p>
          <p>These dungeons ranges from simple kill everything on site, to puzzles, to mind games, to PVP and Wars.</p>
          <div className="row">
            <div className="col-md-4">
              <div className="card-pillage">
                <img src="/pillage1.png" alt="pillage" />
                <div className="content">
                  <div className="title-card">Forest Overworld</div>
                  <div className="desc-card">First Dungeon of the Lore.</div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-pillage">
                <img src="/pillage2.png" alt="pillage" />
                <div className="content">
                  <div className="title-card">Maze of Sorrow</div>
                  <div className="desc-card">Unlocked Soon... *Must be atleast level 25*</div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-pillage">
                <img src="/pillage3.png" alt="pillage" />
                <div className="content">
                  <div className="title-card">????</div>
                  <div className="desc-card">Unlocked Soon...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="farm" id="farm">
        <div className="container">
          <div className="title"> FARM </div>
          <p>Train with your Orcs to gain experience and level up.Send your Orcs out farming to earn our erc20 utility token ZUG.</p>
          <img src="/farm.jpg" alt="train" />
        </div>
      </section> */}
      {/* <section className="raid" id="raid">
        <div className="container">
          <div className="title"> RAID </div>
          <p>Now that your orc is all geared up for battle, its time to send him on raids.</p>
          <p>Rewards for raids include Bone Shards which you can use to summon a new collection of warriors that have a unique utility you can use in gameplay as well as trade on the secondary market.</p>
          <img src="/raid.png" alt="train" />
        </div>
      </section> */}
      <section className='roadmap' id="roadmap">
        <div className='container'>
          <div className='title'>readmap</div>
          <div className="phase-1">
            <div className='container'>
              <div className='grid'>
                <div className="phase__side--left">
                  <img src="/assassin.png" alt="ball" />
                </div>
                <div className='phase__content'>
                  <div className="title__phase">Phase 01</div>
                  <div className='sub-title text-green'>FIRST DEGENERATES MINT</div>
                  <div className='desc'>Drop the 5,555 Degenerate Avatars, and being able to play as those NFTs right after mint.</div>
                  {/* <div className="progress">
                    <div className="progress__content">
                      <div className="progress__bar" style={{ width: '75%' }}>
                        <span className="progress__label">75%</span>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="phase__video">
                  <div className="videos">
                    {/* <img src="/coin.gif" alt="ball" />
                    <img src="/coin.gif" alt="ball" />
                    <img src="/coin.gif" alt="ball" /> */}
                    <img src="/raid.png" alt="ball" />
                    <img src="/raid.png" alt="ball" />
                    <img src="/raid.png" alt="ball" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="phase-2">
            <div className='container'>
              <div className='grid'>
                <div className='phase__content'>
                  <div className="title__phase">Phase 02</div>
                  <div className='text-purple sub-title'>???</div>
                  <div className='desc'>
                    Kill 10,000 Wolfs to unlock this part of the roadmap
                  </div>
                  <div className="progress">
                    <div className="progress__content">
                      <div className="progress__bar" style={{ width: '0%' }}>
                        <span className="progress__label">0%</span>
                      </div>
                    </div>
                  </div>
                  <div className='desc mt-3'>
                    Kill 5,000 Asteagles to unlock this part of the roadmap
                  </div>
                  <div className="progress">
                    <div className="progress__content">
                      <div className="progress__bar" style={{ width: '0%' }}>
                        <span className="progress__label">0%</span>
                      </div>
                    </div>
                  </div>
                  <div className='desc mt-3'>
                    Kill 1,000 Overlords to unlock this part of the roadmap
                  </div>
                  <div className="progress">
                    <div className="progress__content">
                      <div className="progress__bar" style={{ width: '0%' }}>
                        <span className="progress__label">0%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="phase__side--right">
                  <img src="/Pikeman.png" alt="ball" />
                  {/* <img src="/readmap1.png" alt="ball" /> */}
                  {/* <img src="/coin.gif" alt="ball" /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="phase-3">
            <div className='container'>
              <div className='grid'>
                <div className="phase__video">
                  <div className="videos">
                    <img src="/coin.gif" alt="ball" />
                    <img src="/coin.gif" alt="ball" />
                    <img src="/coin.gif" alt="ball" />
                  </div>
                </div>
                <div className="phase__side--left">
                  <img src="/Knight.png" alt="ball" />
                </div>
                <div className='phase__content'>
                  <div className="title__phase">Phase 03</div>
                  <div className='sub-title text-blue'>WAR (Guild &amp; PVP) </div>
                  <div className='desc mb-6'>Form alliances, form parties, socialize with different kinds of people to get ready
                  for this big update and showcase your camaraderie.</div>
                </div>

              </div>
            </div>
          </div>
          <div className="phase-4">
            <div className='container'>
              <div className='grid'>
                <div className="phase__side--top">
                  <img src="/raid.png" alt="ball" />
                </div>
                <div className="phase__side--right">
                  <img src="/Wizard.png" alt="ball" />
                  {/* <img src="/coin.gif" alt="ball" /> */}
                </div>
                <div className='phase__content'>
                  <div className="title__phase">Phase 04</div>
                  <div className='text-green sub-title'>More Dungeons, More Skills, and many more..</div>
                  <div className='desc'>
                    More dungeons to explore, more skills to learn, puzzles to solve, and friends to find.
                  </div>
                  {/* <div className="progress">
                    <div className="progress__content">
                      <div className="progress__bar" style={{ width: '85%' }}>
                        <span className="progress__label">85%</span>
                      </div>
                    </div>
                  </div> */}
                  <div className='desc mt-3'>
                    More systems to be develop. Lands? Other NFT Integrations? Metaverse-wide PVP Tournament?
                  </div>
                  {/* <div className="progress">
                    <div className="progress__content">
                      <div className="progress__bar" style={{ width: '65%' }}>
                        <span className="progress__label">65%</span>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='faq' id="faq">
        <div className="title">FAQ</div>
        <div className='container'>
          {faq.map((e, i) => (
            <Faq key={i} data={e} />
          ))}
        </div>
      </section>
      {/* <section className="team" id="team">
        <div className="container">
          <div className="title"> TEAM </div>
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper"
          >
            {teams.map((e, i) => (
              <SwiperSlide key={i}>
                <div className="card-team">
                  <img src={e.img} alt={e.name} />
                  <div className="content">
                    <div className="name">{e.name}</div>
                    <div className="meta">
                      <span>{e.role}</span>
                      <span>{e.job}</span>
                    </div>
                    <ul className="social">
                      <li>
                        <a href={e.twitter.link} target="_blank">
                          <svg viewBox="0 0 16 16">
                            <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"></path>
                          </svg>
                          <span>{e.twitter.name}</span></a>
                      </li>
                      <li>
                        <a href={e.discord.link} target="_blank">
                          <svg viewBox="0 0 71 55"><g>
                            <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"></path></g><defs><clipPath id="clip0"><rect width="71" height="55" fill="white"></rect></clipPath></defs>
                          </svg> <span>{e.discord.name}</span></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>))}
          </Swiper>
        </div>
      </section> */}
    </div>
  )
}
