import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  SimpleGrid,
  Divider,
  IconButton,
  Collapse,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const ambientFloat = keyframes`
  0% { transform: translate3d(0px, 0px, 0px); }
  50% { transform: translate3d(0px, -14px, 0px); }
  100% { transform: translate3d(0px, 0px, 0px); }
`;

const slowPulse = keyframes`
  0% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.85; transform: scale(1.04); }
  100% { opacity: 0.5; transform: scale(1); }
`;

const shimmer = keyframes`
  0% { transform: translateX(-120%); opacity: 0; }
  30% { opacity: 0.55; }
  100% { transform: translateX(120%); opacity: 0; }
`;

const navItems = [
  { id: "hero", label: "Home" },
  { id: "demo", label: "Demo" },
  { id: "how-it-works", label: "How It Works" },
  { id: "difference", label: "Why It Matters" },
  { id: "analysis", label: "Signals" },
  { id: "trust", label: "Privacy" },
];

const NavButton = ({ label, isActive, onClick }) => (
  <Button
    variant="ghost"
    onClick={onClick}
    color={isActive ? "white" : "rgba(255,255,255,0.68)"}
    fontWeight={isActive ? "600" : "500"}
    fontSize="sm"
    px={4}
    py={2}
    minH="44px"
    borderRadius="full"
    bg={isActive ? "rgba(255,255,255,0.08)" : "transparent"}
    border="1px solid"
    borderColor={isActive ? "rgba(255,255,255,0.12)" : "transparent"}
    transition="all 0.3s cubic-bezier(0.22,1,0.36,1)"
    _hover={{
      color: "white",
      bg: "rgba(255,255,255,0.06)",
      transform: "translateY(-1px)",
    }}
    _active={{
      transform: "translateY(0px) scale(0.98)",
    }}
  >
    {label}
  </Button>
);

const Navbar = ({
  activeSection,
  onNavClick,
  mobileOpen,
  setMobileOpen,
  onInstallClick,
}) => (
  <Box
    position="sticky"
    top="0"
    zIndex="100"
    py={4}
    px={{ base: 4, md: 8 }}
    bg="rgba(2, 6, 23, 0.42)"
    backdropFilter="blur(18px)"
    borderBottom="1px solid rgba(255,255,255,0.06)"
  >
    <Box maxW="1200px" mx="auto">
      <HStack justify="space-between" align="center">
        <Image src="/leveluplenslogo.png" w={{ base: "108px", md: "120px" }} alt="LevelUpLens logo" />

        <HStack
          spacing={2}
          display={{ base: "none", lg: "flex" }}
          px={2}
          py={2}
          borderRadius="full"
          bg="rgba(255,255,255,0.03)"
          border="1px solid rgba(255,255,255,0.06)"
        >
          {navItems.map((item) => (
            <NavButton
              key={item.id}
              label={item.label}
              isActive={activeSection === item.id}
              onClick={() => onNavClick(item.id)}
            />
          ))}
        </HStack>

        <HStack spacing={3}>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            bg="linear-gradient(135deg, rgba(139,92,246,1) 0%, rgba(168,85,247,0.96) 100%)"
            color="white"
            px={6}
            py={5}
            minH="44px"
            borderRadius="16px"
            fontWeight="600"
            boxShadow="0 10px 30px rgba(139,92,246,0.22), inset 0 1px 0 rgba(255,255,255,0.18)"
            transition="transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s cubic-bezier(0.22,1,0.36,1), filter 0.35s ease"
            _hover={{
              transform: "translateY(-2px) scale(1.02)",
              boxShadow:
                "0 18px 40px rgba(139,92,246,0.32), inset 0 1px 0 rgba(255,255,255,0.2)",
              filter: "brightness(1.04)",
            }}
            _active={{
              transform: "translateY(0px) scale(0.99)",
            }}
            onClick={onInstallClick}
          >
            Install LevelUpLens
          </Button>

          <IconButton
            display={{ base: "inline-flex", lg: "none" }}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            icon={mobileOpen ? <CloseIcon boxSize={3.5} /> : <HamburgerIcon boxSize={5} />}
            onClick={() => setMobileOpen(!mobileOpen)}
            minW="44px"
            h="44px"
            borderRadius="14px"
            bg="rgba(255,255,255,0.05)"
            color="white"
            border="1px solid rgba(255,255,255,0.08)"
            _hover={{ bg: "rgba(255,255,255,0.08)" }}
            _active={{ transform: "scale(0.97)" }}
          />
        </HStack>
      </HStack>

      <Collapse in={mobileOpen} animateOpacity>
        <VStack
          mt={4}
          spacing={2}
          align="stretch"
          display={{ base: "flex", lg: "none" }}
          p={3}
          borderRadius="20px"
          bg="rgba(255,255,255,0.04)"
          border="1px solid rgba(255,255,255,0.08)"
          backdropFilter="blur(18px)"
        >
          {navItems.map((item) => (
            <Button
              key={item.id}
              justifyContent="flex-start"
              variant="ghost"
              minH="46px"
              borderRadius="14px"
              color={activeSection === item.id ? "white" : "rgba(255,255,255,0.72)"}
              bg={activeSection === item.id ? "rgba(255,255,255,0.08)" : "transparent"}
              onClick={() => {
                onNavClick(item.id);
                setMobileOpen(false);
              }}
              _hover={{ bg: "rgba(255,255,255,0.06)" }}
            >
              {item.label}
            </Button>
          ))}

          <Button
            mt={2}
            minH="48px"
            borderRadius="16px"
            bg="linear-gradient(135deg, rgba(139,92,246,1) 0%, rgba(168,85,247,0.96) 100%)"
            color="white"
            onClick={() => {
              onInstallClick();
              setMobileOpen(false);
            }}
            _hover={{ filter: "brightness(1.04)" }}
          >
            Install LevelUpLens
          </Button>
        </VStack>
      </Collapse>
    </Box>
  </Box>
);

function App() {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const demoRef = useRef(null);
  const howItWorksRef = useRef(null);
  const differenceRef = useRef(null);
  const analysisRef = useRef(null);
  const trustRef = useRef(null);
  const heroGlowRef = useRef(null);
  const heroOrbRef = useRef(null);
  const heroContentRef = useRef(null);
  const demoWrapRef = useRef(null);
  const demoVideoRef = useRef(null);
  const lenisRef = useRef(null);

  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  const sectionMap = {
    hero: heroRef,
    demo: demoRef,
    "how-it-works": howItWorksRef,
    difference: differenceRef,
    analysis: analysisRef,
    trust: trustRef,
  };

  const scrollToSection = (sectionId) => {
    const targetRef = sectionMap[sectionId];
    if (!targetRef?.current) return;

    setActiveSection(sectionId);

    if (lenisRef.current) {
      lenisRef.current.scrollTo(targetRef.current, {
        offset: -96,
        duration: 1.2,
      });
    } else {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleInstallClick = () => {
    scrollToSection("trust");
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const sectionEntries = [
      { id: "hero", el: heroRef.current },
      { id: "demo", el: demoRef.current },
      { id: "how-it-works", el: howItWorksRef.current },
      { id: "difference", el: differenceRef.current },
      { id: "analysis", el: analysisRef.current },
      { id: "trust", el: trustRef.current },
    ];

    sectionEntries.forEach(({ id, el }) => {
      if (!el) return;
      ScrollTrigger.create({
        trigger: el,
        start: "top 35%",
        end: "bottom 35%",
        onEnter: () => setActiveSection(id),
        onEnterBack: () => setActiveSection(id),
      });
    });

    if (!reduceMotion) {
      const ctx = gsap.context(() => {
        gsap.set(".reveal", { opacity: 0, y: 48 });
        gsap.set(".hero-animate", { opacity: 0, y: 34, scale: 0.985 });
        gsap.set(".hero-button", { opacity: 0, y: 26, scale: 0.96 });
        gsap.set(".demo-shell", { opacity: 0, y: 60, scale: 0.96, rotateX: 4 });
        gsap.set(".section-fade", { opacity: 0, y: 40 });

        const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

        heroTl
          .to(".hero-animate", {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.05,
            stagger: 0.12,
          })
          .to(
            ".hero-button",
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
            },
            "-=0.45"
          )
          .to(
            ".hero-meta",
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
            },
            "-=0.45"
          );

        gsap.to(heroGlowRef.current, {
          yPercent: -10,
          xPercent: 4,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        gsap.to(heroOrbRef.current, {
          yPercent: -18,
          xPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });

        gsap.to(heroContentRef.current, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.9,
          },
        });

        gsap.utils.toArray(".reveal").forEach((el) => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 84%",
            },
          });
        });

        gsap.utils.toArray(".section-fade").forEach((el) => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 82%",
            },
          });
        });

        gsap.to(".demo-shell", {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: demoWrapRef.current,
            start: "top 78%",
          },
        });

        gsap.to(demoWrapRef.current, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: demoWrapRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.15,
          },
        });

        gsap.to(demoVideoRef.current, {
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: demoWrapRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        document.querySelectorAll(".premium-card").forEach((card) => {
          const glow = card.querySelector(".card-glow");

          const onMove = (e) => {
            const rect = card.getBoundingClientRect();
            const px = (e.clientX - rect.left) / rect.width;
            const py = (e.clientY - rect.top) / rect.height;

            gsap.to(card, {
              rotateY: (px - 0.5) * 8,
              rotateX: (0.5 - py) * 8,
              y: -8,
              transformPerspective: 1000,
              transformOrigin: "center",
              duration: 0.45,
              ease: "power3.out",
            });

            if (glow) {
              gsap.to(glow, {
                opacity: 1,
                x: (px - 0.5) * 20,
                y: (py - 0.5) * 20,
                duration: 0.35,
                ease: "power2.out",
              });
            }
          };

          const onLeave = () => {
            gsap.to(card, {
              rotateY: 0,
              rotateX: 0,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
            });

            if (glow) {
              gsap.to(glow, {
                opacity: 0.45,
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
              });
            }
          };

          card.addEventListener("mousemove", onMove);
          card.addEventListener("mouseleave", onLeave);
        });
      }, pageRef);

      return () => {
        ctx.revert();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        lenis.destroy();
      };
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <Box
      ref={pageRef}
      minH="100vh"
      bg="#020617"
      color="white"
      position="relative"
      overflow="hidden"
      sx={{
        perspective: "1200px",
        backgroundImage: `
          radial-gradient(circle at 20% 10%, rgba(76, 29, 149, 0.32), transparent 32%),
          radial-gradient(circle at 80% 18%, rgba(59, 130, 246, 0.14), transparent 24%),
          linear-gradient(180deg, #020617 0%, #030712 40%, #0b1020 100%)
        `,
      }}
    >
      <Box
        ref={heroGlowRef}
        position="absolute"
        top="-6%"
        left="50%"
        transform="translateX(-50%)"
        w={{ base: "520px", md: "820px" }}
        h={{ base: "520px", md: "820px" }}
        bg="radial-gradient(circle, rgba(168,85,247,0.24) 0%, rgba(99,102,241,0.16) 36%, rgba(14,165,233,0.06) 58%, transparent 74%)"
        filter="blur(80px)"
        opacity={0.9}
        animation={`${slowPulse} 8s ease-in-out infinite`}
        zIndex={0}
        pointerEvents="none"
      />

      <Box
        ref={heroOrbRef}
        position="absolute"
        top="14%"
        right={{ base: "-90px", md: "10%" }}
        w={{ base: "180px", md: "260px" }}
        h={{ base: "180px", md: "260px" }}
        borderRadius="full"
        bg="linear-gradient(135deg, rgba(255,255,255,0.08), rgba(139,92,246,0.16))"
        border="1px solid rgba(255,255,255,0.08)"
        boxShadow="inset 0 1px 0 rgba(255,255,255,0.2), 0 30px 80px rgba(0,0,0,0.28)"
        backdropFilter="blur(14px)"
        animation={`${ambientFloat} 7s ease-in-out infinite`}
        zIndex={0}
        pointerEvents="none"
      />

      <Box
        position="absolute"
        inset="0"
        bgImage="linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)"
        bgSize="120px 120px"
        opacity={0.18}
        maskImage="linear-gradient(to bottom, rgba(0,0,0,0.55), transparent 85%)"
        pointerEvents="none"
      />

      <Navbar
        activeSection={activeSection}
        onNavClick={scrollToSection}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        onInstallClick={handleInstallClick}
      />

      <Box as="main">
        <Container
          id="hero"
          ref={heroRef}
          maxW="980px"
          py={{ base: 20, md: 28 }}
          position="relative"
          zIndex={10}
        >
          <VStack ref={heroContentRef} spacing={10} textAlign="center">
            <Box
              className="hero-animate"
              px={4}
              py={2}
              borderRadius="full"
              border="1px solid rgba(255,255,255,0.08)"
              bg="rgba(255,255,255,0.04)"
              backdropFilter="blur(14px)"
              boxShadow="inset 0 1px 0 rgba(255,255,255,0.08)"
            >
              <Text
                fontSize="sm"
                color="rgba(255,255,255,0.72)"
                letterSpacing="0.08em"
                textTransform="uppercase"
              >
                Application intelligence layer for job seekers
              </Text>
            </Box>

            <Heading
              className="hero-animate"
              fontSize={{ base: "4xl", md: "6xl" }}
              lineHeight={{ base: "1.06", md: "1.02" }}
              letterSpacing={{ base: "-0.03em", md: "-0.045em" }}
              maxW="900px"
            >
              Know Why You Might Get Rejected -
              <Text
                as="span"
                display="block"
                bgGradient="linear(to-r, purple.300, blue.300)"
                bgClip="text"
                textShadow="0 0 30px rgba(147,51,234,0.12)"
              >
                Before You Apply
              </Text>
            </Heading>

            <Text
              className="hero-animate"
              fontSize="lg"
              color="gray.400"
              mt={-4}
              letterSpacing="0.01em"
            >
              Tired of seeing "Unfortunately..."? Know before you apply.
            </Text>

            <Text
              className="hero-animate"
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.300"
              maxW="760px"
              lineHeight="1.9"
            >
              Most job seekers apply blindly.
              LevelUpLens analyzes job descriptions and shows what the role actually expects — so you can decide if applying makes sense before you waste time.
            </Text>

            <Text
              className="hero-animate"
              fontSize="sm"
              color="gray.400"
              fontWeight="500"
              letterSpacing="0.02em"
            >
              LevelUpLens gives insights — you decide where to apply.
            </Text>

            <HStack
              className="hero-animate"
              spacing={3}
              wrap="wrap"
              justify="center"
              color="gray.300"
              fontSize="sm"
            >
              <Box
                px={4}
                py={2}
                borderRadius="full"
                bg="rgba(255,255,255,0.04)"
                border="1px solid rgba(255,255,255,0.06)"
              >
                See relevant signals
              </Box>
              <Box
                px={4}
                py={2}
                borderRadius="full"
                bg="rgba(255,255,255,0.04)"
                border="1px solid rgba(255,255,255,0.06)"
              >
                Spot gaps before applying
              </Box>
              <Box
                px={4}
                py={2}
                borderRadius="full"
                bg="rgba(255,255,255,0.04)"
                border="1px solid rgba(255,255,255,0.06)"
              >
                Decide faster
              </Box>
            </HStack>

            <Box className="hero-button" position="relative">
              <Button
                h="65px"
                px={12}
                borderRadius="18px"
                fontSize="lg"
                fontWeight="700"
                bg="linear-gradient(135deg, rgba(139,92,246,1) 0%, rgba(168,85,247,0.96) 100%)"
                boxShadow="0 24px 60px rgba(168,85,247,0.24), inset 0 1px 0 rgba(255,255,255,0.18)"
                transition="transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s cubic-bezier(0.22,1,0.36,1), filter 0.35s ease"
                _hover={{
                  transform: "translateY(-3px) scale(1.02)",
                  boxShadow:
                    "0 34px 78px rgba(168,85,247,0.34), inset 0 1px 0 rgba(255,255,255,0.22)",
                  filter: "brightness(1.05)",
                }}
                _active={{
                  transform: "translateY(0px) scale(0.99)",
                }}
                onClick={handleInstallClick}
              >
                Install LevelUpLens Extension
              </Button>

              <Box
                position="absolute"
                inset="-2px"
                borderRadius="20px"
                overflow="hidden"
                pointerEvents="none"
              >
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  w="50%"
                  h="100%"
                  bg="linear-gradient(90deg, transparent, rgba(255,255,255,0.42), transparent)"
                  animation={`${shimmer} 2.8s linear infinite`}
                />
              </Box>
            </Box>

            <VStack
              className="hero-meta"
              spacing={1}
              fontSize="sm"
              color="gray.400"
              opacity={0}
              transform="translateY(14px)"
            >
              <Text>✓ Works directly on LinkedIn</Text>
              <Text>✓ Your resume never leaves your browser</Text>
              <Text>✓ Free • No account required</Text>
            </VStack>
          </VStack>
        </Container>

        <Container
          id="demo"
          ref={demoRef}
          maxW="1000px"
          pb={24}
          position="relative"
          zIndex={10}
        >
          <Box
            position="absolute"
            top="48%"
            left="50%"
            transform="translate(-50%, -50%)"
            w={{ base: "90%", md: "960px" }}
            h={{ base: "320px", md: "520px" }}
            bg="radial-gradient(circle, rgba(168,85,247,0.22), rgba(59,130,246,0.09) 42%, transparent 72%)"
            filter="blur(90px)"
            zIndex={0}
          />

          <Box
            ref={demoWrapRef}
            className="demo-shell"
            position="relative"
            borderRadius="28px"
            overflow="hidden"
            border="1px solid rgba(255,255,255,0.12)"
            bg="rgba(255,255,255,0.04)"
            backdropFilter="blur(22px)"
            boxShadow="
              0 45px 140px rgba(0,0,0,0.62),
              inset 0 1px 0 rgba(255,255,255,0.12),
              0 0 0 1px rgba(255,255,255,0.04)
            "
            zIndex={1}
            sx={{ transformStyle: "preserve-3d" }}
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              h="56px"
              bg="linear-gradient(to bottom, rgba(255,255,255,0.08), transparent)"
              zIndex={2}
              pointerEvents="none"
            />

            <Box
              position="absolute"
              inset="0"
              borderRadius="28px"
              boxShadow="inset 0 -80px 100px rgba(2,6,23,0.18)"
              zIndex={2}
              pointerEvents="none"
            />

            <Box ref={demoVideoRef} transform="scale(1.02)" transformOrigin="center center">
              <video autoPlay muted loop playsInline style={{ width: "100%", display: "block" }}>
                <source src="/demo.mp4" type="video/mp4" />
              </video>
            </Box>
          </Box>
        </Container>

        <Container
          id="how-it-works"
          ref={howItWorksRef}
          maxW="1000px"
          pb={24}
          position="relative"
          zIndex={10}
        >
          <VStack spacing={6} mb={12} textAlign="center">
            <Heading className="section-fade" letterSpacing="-0.03em">
              Make better application decisions in three steps
            </Heading>
            <Text className="section-fade" color="gray.400" maxW="680px">
              LevelUpLens sits on top of the job search flow you already use and adds clarity before you commit time.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} textAlign="center">
            <Box
              className="reveal"
              p={6}
              borderRadius="20px"
              bg="rgba(255,255,255,0.025)"
              border="1px solid rgba(255,255,255,0.06)"
              _hover={{
                transform: "translateY(-6px)",
                borderColor: "rgba(168,85,247,0.22)",
                bg: "rgba(255,255,255,0.045)",
              }}
              transition="all 0.35s cubic-bezier(0.22,1,0.36,1)"
            >
              <Heading size="md">1️⃣ Upload Resume</Heading>
              <Text mt={3} color="gray.400">
                Upload your resume once so LevelUpLens can extract your skills.
              </Text>
            </Box>

            <Box
              className="reveal"
              p={6}
              borderRadius="20px"
              bg="rgba(255,255,255,0.025)"
              border="1px solid rgba(255,255,255,0.06)"
              _hover={{
                transform: "translateY(-6px)",
                borderColor: "rgba(168,85,247,0.22)",
                bg: "rgba(255,255,255,0.045)",
              }}
              transition="all 0.35s cubic-bezier(0.22,1,0.36,1)"
            >
              <Heading size="md">2️⃣ Open a Job</Heading>
              <Text mt={3} color="gray.400">
                Browse jobs normally on LinkedIn.
              </Text>
            </Box>

            <Box
              className="reveal"
              p={6}
              borderRadius="20px"
              bg="rgba(255,255,255,0.025)"
              border="1px solid rgba(255,255,255,0.06)"
              _hover={{
                transform: "translateY(-6px)",
                borderColor: "rgba(168,85,247,0.22)",
                bg: "rgba(255,255,255,0.045)",
              }}
              transition="all 0.35s cubic-bezier(0.22,1,0.36,1)"
            >
              <Heading size="md">3️⃣ Get Instant Insight</Heading>
              <Text mt={3} color="gray.400">
                Understand requirements and decide to apply or skip.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>

        <Container
          id="difference"
          ref={differenceRef}
          maxW="1100px"
          pb={24}
          position="relative"
          zIndex={10}
        >
          <VStack spacing={6} mb={12} textAlign="center">
            <Heading className="section-fade" letterSpacing="-0.035em">
              Stop applying blind
            </Heading>
            <Text className="section-fade" color="gray.400" maxW="700px">
              Most tools help you analyze a job. LevelUpLens helps you decide whether that job deserves your time.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box
              className="premium-card section-fade"
              position="relative"
              p={8}
              borderRadius="26px"
              bg="linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.028))"
              border="1px solid rgba(255,255,255,0.08)"
              backdropFilter="blur(20px)"
              boxShadow="0 20px 60px rgba(0,0,0,0.24)"
            >
              <Text
                fontSize="xs"
                textTransform="uppercase"
                letterSpacing="0.12em"
                color="red.300"
                mb={5}
              >
                Blind application
              </Text>
              <VStack align="start" spacing={4}>
                <Text fontSize="2xl" fontWeight="700">
                  Apply first
                </Text>
                <Text color="gray.400">Read fast. Guess fit. Hope for the best.</Text>
                <Divider borderColor="rgba(255,255,255,0.08)" />
                <Text color="gray.300">No clarity on what the role really expects</Text>
                <Text color="gray.300">No signal on where your profile is weak</Text>
                <Text color="gray.300">Time lost on jobs you were never likely to pursue well</Text>
              </VStack>
            </Box>

            <Box
              className="premium-card section-fade"
              position="relative"
              p={8}
              borderRadius="26px"
              bg="linear-gradient(180deg, rgba(139,92,246,0.16), rgba(255,255,255,0.04))"
              border="1px solid rgba(168,85,247,0.18)"
              backdropFilter="blur(20px)"
              boxShadow="0 25px 80px rgba(76,29,149,0.22)"
            >
              <Text
                fontSize="xs"
                textTransform="uppercase"
                letterSpacing="0.12em"
                color="purple.200"
                mb={5}
              >
                Informed application
              </Text>
              <VStack align="start" spacing={4}>
                <Text fontSize="2xl" fontWeight="700">
                  Decide first
                </Text>
                <Text color="gray.300">
                  See the important signals, notice the gaps, then choose to apply or skip.
                </Text>
                <Divider borderColor="rgba(255,255,255,0.08)" />
                <Text color="gray.200">Clearer expectations before you invest effort</Text>
                <Text color="gray.200">Faster decisions on roles that fit your direction</Text>
                <Text color="gray.200">More focus on opportunities worth pursuing</Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </Container>

        <Container
          id="analysis"
          ref={analysisRef}
          maxW="1200px"
          pb={24}
          position="relative"
          zIndex={10}
        >
          <VStack spacing={6} mb={12} textAlign="center">
            <Heading className="section-fade" letterSpacing="-0.03em">
              Understand the role before you commit
            </Heading>
            <Text className="section-fade" color="gray.400" maxW="700px">
              LevelUpLens turns a long job description into practical signals you can act on.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box
              className="premium-card section-fade"
              position="relative"
              bg="linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.035))"
              border="1px solid rgba(255,255,255,0.12)"
              borderRadius="24px"
              p={8}
              backdropFilter="blur(20px)"
              boxShadow="0 20px 60px rgba(0,0,0,0.26), inset 0 1px 0 rgba(255,255,255,0.08)"
              sx={{ transformStyle: "preserve-3d" }}
            >
              <Box
                className="card-glow"
                position="absolute"
                top="-10%"
                right="-10%"
                w="160px"
                h="160px"
                borderRadius="full"
                bg="radial-gradient(circle, rgba(168,85,247,0.30), transparent 70%)"
                filter="blur(20px)"
                opacity={0.45}
                pointerEvents="none"
              />
              <VStack align="center" spacing={6} textAlign="center" position="relative" zIndex={1}>
                <Heading size="md">Why Most Job Applications Go Nowhere</Heading>
                <Text fontSize="lg">200+ applications</Text>
                <Text color="gray.400">↓</Text>
                <Text fontSize="lg">Only 4–6 interviews</Text>
                <Text color="gray.400">↓</Text>
                <Text fontSize="lg">95% rejection rate</Text>
                <Text pt={4} color="purple.300">
                  Applying to more jobs isn't the solution.
                  Applying to the right jobs is.
                </Text>
              </VStack>
            </Box>

            <Box
              className="premium-card section-fade"
              position="relative"
              bg="linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.035))"
              border="1px solid rgba(255,255,255,0.12)"
              borderRadius="24px"
              p={8}
              backdropFilter="blur(20px)"
              boxShadow="0 20px 60px rgba(0,0,0,0.26), inset 0 1px 0 rgba(255,255,255,0.08)"
              sx={{ transformStyle: "preserve-3d" }}
            >
              <Box
                className="card-glow"
                position="absolute"
                bottom="-8%"
                left="-8%"
                w="150px"
                h="150px"
                borderRadius="full"
                bg="radial-gradient(circle, rgba(59,130,246,0.22), transparent 70%)"
                filter="blur(20px)"
                opacity={0.4}
                pointerEvents="none"
              />
              <VStack spacing={5} align="center" textAlign="center" position="relative" zIndex={1}>
                <Heading size="md">How LevelUpLens Works</Heading>
                <Text>Upload your resume</Text>
                <Text color="gray.400">↓</Text>
                <Text>Open a job on LinkedIn</Text>
                <Text color="gray.400">↓</Text>
                <Text>LevelUpLens analyzes the role instantly</Text>
                <Text color="gray.400">↓</Text>
                <Text>See gaps & expectations</Text>
                <Text color="gray.400">↓</Text>
                <Text fontWeight="600">Decide to apply or skip</Text>
              </VStack>
            </Box>

            <Box
              className="premium-card section-fade"
              position="relative"
              bg="linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.04))"
              border="1px solid rgba(255,255,255,0.12)"
              borderRadius="24px"
              p={8}
              backdropFilter="blur(20px)"
              boxShadow="0 20px 60px rgba(0,0,0,0.26), inset 0 1px 0 rgba(255,255,255,0.08)"
              sx={{ transformStyle: "preserve-3d" }}
            >
              <Box
                className="card-glow"
                position="absolute"
                top="-6%"
                left="50%"
                transform="translateX(-50%)"
                w="180px"
                h="180px"
                borderRadius="full"
                bg="radial-gradient(circle, rgba(34,197,94,0.22), transparent 72%)"
                filter="blur(24px)"
                opacity={0.42}
                pointerEvents="none"
              />
              <VStack align="start" spacing={5} position="relative" zIndex={1}>
                <Heading size="md">Example Job Analysis</Heading>

                <Box
                  px={4}
                  py={3}
                  borderRadius="16px"
                  bg="rgba(34,197,94,0.14)"
                  border="1px solid rgba(34,197,94,0.22)"
                >
                  <Text fontSize="xs" textTransform="uppercase" letterSpacing="0.12em" color="green.200">
                    Signal
                  </Text>
                  <Text fontSize="2xl" fontWeight="700" color="green.300">
                    Strong Signal
                  </Text>
                </Box>

                <Divider borderColor="rgba(255,255,255,0.12)" />

                <Text color="gray.400">Relevant Signals</Text>

                <HStack wrap="wrap">
                  <Box bg="rgba(34,197,94,0.18)" px={3} py={1} borderRadius="full">
                    Python
                  </Box>
                  <Box bg="rgba(34,197,94,0.18)" px={3} py={1} borderRadius="full">
                    Django
                  </Box>
                  <Box bg="rgba(34,197,94,0.18)" px={3} py={1} borderRadius="full">
                    REST API
                  </Box>
                  <Box bg="rgba(34,197,94,0.18)" px={3} py={1} borderRadius="full">
                    PostgreSQL
                  </Box>
                </HStack>

                <Text color="gray.400">Gaps to Consider</Text>

                <HStack wrap="wrap">
                  <Box bg="rgba(239,68,68,0.18)" px={3} py={1} borderRadius="full">
                    Docker
                  </Box>
                  <Box bg="rgba(239,68,68,0.18)" px={3} py={1} borderRadius="full">
                    AWS
                  </Box>
                </HStack>

                <Text color="gray.400" fontSize="sm">
                  You match core backend skills, but this role also expects Docker and AWS.
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </Container>

        <Container
          id="trust"
          ref={trustRef}
          maxW="860px"
          pb={24}
          position="relative"
          zIndex={10}
        >
          <VStack
            className="section-fade"
            spacing={8}
            textAlign="center"
            p={{ base: 8, md: 10 }}
            borderRadius="28px"
            bg="linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))"
            border="1px solid rgba(255,255,255,0.08)"
            backdropFilter="blur(18px)"
            boxShadow="0 20px 60px rgba(0,0,0,0.18)"
          >
            <Heading letterSpacing="-0.03em">Your resume stays private.</Heading>
            <Text color="gray.400" maxW="620px" lineHeight="1.85">
              LevelUpLens only extracts the skills needed for analysis.
              Your resume is never stored or saved.
            </Text>

            <HStack wrap="wrap" justify="center" spacing={3}>
              <Box
                px={4}
                py={2}
                borderRadius="full"
                bg="rgba(255,255,255,0.04)"
                border="1px solid rgba(255,255,255,0.08)"
                color="gray.300"
                fontSize="sm"
              >
                Resume stays in your browser
              </Box>
              <Box
                px={4}
                py={2}
                borderRadius="full"
                bg="rgba(255,255,255,0.04)"
                border="1px solid rgba(255,255,255,0.08)"
                color="gray.300"
                fontSize="sm"
              >
                No account required
              </Box>
              <Box
                px={4}
                py={2}
                borderRadius="full"
                bg="rgba(255,255,255,0.04)"
                border="1px solid rgba(255,255,255,0.08)"
                color="gray.300"
                fontSize="sm"
              >
                Fast local workflow
              </Box>
            </HStack>

            <Button
              h="70px"
              px={14}
              fontSize="lg"
              borderRadius="20px"
              fontWeight="700"
              bg="linear-gradient(135deg, rgba(139,92,246,1) 0%, rgba(168,85,247,0.96) 100%)"
              boxShadow="0 25px 60px rgba(168,85,247,0.24), inset 0 1px 0 rgba(255,255,255,0.18)"
              transition="transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s cubic-bezier(0.22,1,0.36,1)"
              _hover={{
                transform: "translateY(-3px) scale(1.02)",
                boxShadow:
                  "0 34px 80px rgba(168,85,247,0.34), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
              _active={{
                transform: "translateY(0px) scale(0.99)",
              }}
            >
              Install LevelUpLens Extension
            </Button>
          </VStack>
        </Container>

        <Container maxW="900px" pb={24}>
          <VStack className="section-fade" spacing={4} textAlign="center">
            <Text color="gray.400">
              Early testers report clearer decisions and fewer wasted applications.
            </Text>
            <Text color="gray.500" fontSize="sm">
              Built for people who want to apply with more intention, not just more volume.
            </Text>
          </VStack>
        </Container>

        <Box
          className="section-fade"
          textAlign="center"
          py={10}
          color="gray.500"
          position="relative"
          zIndex={10}
          borderTop="1px solid rgba(255,255,255,0.06)"
        >
          LevelUpLens v1.0 — Decide before you apply
          <Text mt={2} fontSize="xs">
            Built for job seekers like you 🇮🇳
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;