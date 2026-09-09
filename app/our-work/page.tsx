"use client"

import React, {
  ChangeEvent,
  DragEvent,
  useMemo,
  useRef,
  useState,
} from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Brain,
  Building2,
  Camera,
  Check,
  ChevronDown,
  ChevronUp,
  CircleCheck,
  Globe2,
  HeartHandshake,
  ImagePlus,
  Lightbulb,
  MapPin,
  MessageCircle,
  Network,
  Plus,
  Quote,
  Rocket,
  School,
  Sparkles,
  Target,
  Trash2,
  Upload,
  Users,
  X,
  Zap,
} from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

type WorkCategory =
  | "Education"
  | "Digital Skills"
  | "Youth"
  | "Community"
  | "Innovation"
  | "Mentorship"

type GalleryImage = {
  id: string
  src: string
  name: string
  caption: string
  alt: string
  category: WorkCategory
  featured: boolean
}

type Project = {
  id: string
  title: string
  category: WorkCategory
  description: string
  location: string
  image: string
  impact: string
  number: string
  label: string
}

const categories: {
  name: WorkCategory
  description: string
  icon: React.ElementType
}[] = [
  {
    name: "Education",
    description:
      "Creating pathways to meaningful learning and opportunity.",
    icon: School,
  },
  {
    name: "Digital Skills",
    description:
      "Helping young people build practical skills for a digital world.",
    icon: Brain,
  },
  {
    name: "Youth",
    description:
      "Supporting young people to discover, create and lead.",
    icon: Users,
  },
  {
    name: "Community",
    description:
      "Working with communities to create sustainable local solutions.",
    icon: HeartHandshake,
  },
  {
    name: "Innovation",
    description:
      "Turning ideas into practical solutions for real-world challenges.",
    icon: Lightbulb,
  },
  {
    name: "Mentorship",
    description:
      "Connecting people with guidance, experience and opportunity.",
    icon: Network,
  },
]

const projects: Project[] = [
  {
    id: "01",
    title: "Digital Futures",
    category: "Digital Skills",
    description:
      "Practical digital learning experiences that help young people understand technology and use it to create opportunities.",
    location: "Kenya",
    image: "/images/our-work/digital-futures.jpg",
    impact: "Digital confidence",
    number: "01",
    label: "Skills",
  },
  {
    id: "02",
    title: "Learning Communities",
    category: "Education",
    description:
      "Community-centred learning initiatives designed to make knowledge more accessible, relevant and practical.",
    location: "Kenya",
    image: "/images/our-work/learning.jpg",
    impact: "Accessible learning",
    number: "02",
    label: "Education",
  },
  {
    id: "03",
    title: "Youth Leadership",
    category: "Youth",
    description:
      "Programs that encourage young people to take ownership of ideas, projects and positive change within their communities.",
    location: "Kenya",
    image: "/images/our-work/youth.jpg",
    impact: "Future leaders",
    number: "03",
    label: "Leadership",
  },
  {
    id: "04",
    title: "Community Innovation",
    category: "Innovation",
    description:
      "Supporting creative thinking and practical innovation around challenges affecting communities.",
    location: "Kenya",
    image: "/images/our-work/innovation.jpg",
    impact: "Local solutions",
    number: "04",
    label: "Innovation",
  },
]

const initialGallery: GalleryImage[] = [
  {
    id: "gallery-1",
    src: "/images/our-work/gallery-1.jpg",
    name: "Community learning",
    caption: "Learning together and building confidence.",
    alt: "Young people participating in a community learning session",
    category: "Education",
    featured: true,
  },
  {
    id: "gallery-2",
    src: "/images/our-work/gallery-2.jpg",
    name: "Digital skills",
    caption: "Building practical digital skills.",
    alt: "Students learning digital skills",
    category: "Digital Skills",
    featured: false,
  },
  {
    id: "gallery-3",
    src: "/images/our-work/gallery-3.jpg",
    name: "Youth leadership",
    caption: "Young people turning ideas into action.",
    alt: "Young people collaborating on a project",
    category: "Youth",
    featured: false,
  },
]

const impactNumbers = [
  {
    value: "01",
    suffix: "",
    label: "Shared vision",
  },
  {
    value: "∞",
    suffix: "",
    label: "Possibilities",
  },
  {
    value: "100",
    suffix: "%",
    label: "People first",
  },
  {
    value: "1",
    suffix: "",
    label: "Smart World",
  },
]

const faqs = [
  {
    question: "What kind of work does Zindua Foundation do?",
    answer:
      "Zindua Foundation focuses on education, digital skills, youth empowerment, mentorship, community development and innovation. Our work is designed around people, opportunity and practical impact.",
  },
  {
    question: "Where does Zindua Foundation work?",
    answer:
      "Our vision begins in Kenya and is designed to connect local action with a wider Smart World movement.",
  },
  {
    question: "Can my organisation partner with Zindua?",
    answer:
      "Yes. We welcome organisations, educators, innovators, communities and individuals who share our commitment to creating meaningful opportunities.",
  },
  {
    question: "Can I contribute photographs from a Zindua project?",
    answer:
      "Yes. The project gallery is designed to support multiple photographs, captions, accessibility text and project categories.",
  },
]

function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <div
      className={`mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] ${
        light ? "text-white/70" : "text-black/50"
      }`}
    >
      <span
        className={`h-px w-10 ${
          light ? "bg-white/40" : "bg-black/30"
        }`}
      />
      <span>{children}</span>
    </div>
  )
}

function AnimatedCounter({
  value,
  suffix,
}: {
  value: string
  suffix?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl"
    >
      {value}
      {suffix}
    </motion.div>
  )
}

function UploadDropzone({
  onFiles,
}: {
  onFiles: (files: File[]) => void
}) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [dragging, setDragging] = useState(false)

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? [])
    onFiles(files)
    event.target.value = ""
  }

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setDragging(false)

    const files = Array.from(event.dataTransfer.files ?? [])
    onFiles(files)
  }

  return (
    <div
      onDragEnter={(event) => {
        event.preventDefault()
        setDragging(true)
      }}
      onDragOver={(event) => {
        event.preventDefault()
        setDragging(true)
      }}
      onDragLeave={(event) => {
        event.preventDefault()
        setDragging(false)
      }}
      onDrop={handleDrop}
      className={`group relative overflow-hidden rounded-[2rem] border-2 border-dashed p-8 text-center transition-all duration-300 sm:p-12 ${
        dragging
          ? "border-black bg-black/[0.06] scale-[1.01]"
          : "border-black/15 bg-white hover:border-black/30 hover:bg-black/[0.02]"
      }`}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/avif"
        multiple
        onChange={handleInput}
        className="hidden"
      />

      <motion.div
        animate={{
          y: dragging ? -6 : 0,
          scale: dragging ? 1.05 : 1,
        }}
        className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white"
      >
        <Upload size={26} />
      </motion.div>

      <h3 className="text-xl font-black sm:text-2xl">
        Add project photographs
      </h3>

      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-black/55 sm:text-base">
        Drag and drop photographs here, or select multiple images from
        your device. Use clear photographs that tell the story of the
        work.
      </p>

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition hover:scale-105"
      >
        <ImagePlus size={17} />
        Select photographs
      </button>

      <p className="mt-5 text-xs text-black/35">
        JPG, PNG, WEBP or AVIF • Multiple images supported
      </p>
    </div>
  )
}

function GalleryManager() {
  const [images, setImages] = useState<GalleryImage[]>(initialGallery)
  const [filter, setFilter] = useState<"All" | WorkCategory>("All")
  const [activePreview, setActivePreview] =
    useState<GalleryImage | null>(null)

  const visibleImages = useMemo(() => {
    if (filter === "All") return images
    return images.filter((image) => image.category === filter)
  }, [filter, images])

  const addFiles = (files: File[]) => {
    const imageFiles = files.filter((file) =>
      file.type.startsWith("image/")
    )

    const newImages = imageFiles.map((file, index) => ({
      id: `${Date.now()}-${index}-${Math.random()}`,
      src: URL.createObjectURL(file),
      name: file.name,
      caption: "Project photograph",
      alt: file.name.replace(/\.[^/.]+$/, ""),
      category: "Community" as WorkCategory,
      featured: false,
    }))

    setImages((current) => [...current, ...newImages])
  }

  const updateImage = (
    id: string,
    field: keyof GalleryImage,
    value: string | boolean | WorkCategory
  ) => {
    setImages((current) =>
      current.map((image) =>
        image.id === id
          ? {
              ...image,
              [field]: value,
            }
          : image
      )
    )
  }

  const removeImage = (id: string) => {
    setImages((current) => current.filter((image) => image.id !== id))
  }

  const setFeatured = (id: string) => {
    setImages((current) =>
      current.map((image) => ({
        ...image,
        featured: image.id === id,
      }))
    )
  }

  return (
    <section
      id="project-gallery"
      className="border-t border-black/10 bg-[#f5f3ed] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <SectionLabel>Project Gallery</SectionLabel>

            <h2 className="max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              Let the work
              <span className="block text-black/40">
                speak for itself.
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="text-base leading-8 text-black/60 sm:text-lg">
              Photographs help us document the people, places, ideas and
              moments behind every project. Upload project photographs,
              organise them and prepare them for the Zindua story.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <UploadDropzone onFiles={addFiles} />
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {(["All", ...categories.map((item) => item.name)] as const).map(
            (item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold transition ${
                  filter === item
                    ? "bg-black text-white"
                    : "bg-white text-black/55 hover:bg-black/10"
                }`}
              >
                {item}
              </button>
            )
          )}
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleImages.map((image) => (
              <motion.article
                layout
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="overflow-hidden rounded-[2rem] border border-black/10 bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-x-0 top-0 flex justify-between p-4">
                    <span className="rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider backdrop-blur">
                      {image.category}
                    </span>

                    {image.featured && (
                      <span className="rounded-full bg-black px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-white">
                        Featured
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActivePreview(image)}
                    className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 transition hover:scale-110"
                    aria-label="Preview image"
                  >
                    <ArrowUpRight size={17} />
                  </button>
                </div>

                <div className="space-y-4 p-5">
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/35">
                      Caption
                    </label>
                    <input
                      value={image.caption}
                      onChange={(event) =>
                        updateImage(
                          image.id,
                          "caption",
                          event.target.value
                        )
                      }
                      className="mt-2 w-full rounded-xl border border-black/10 bg-[#faf9f5] px-3 py-2.5 text-sm outline-none transition focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/35">
                      Accessibility text
                    </label>
                    <input
                      value={image.alt}
                      onChange={(event) =>
                        updateImage(
                          image.id,
                          "alt",
                          event.target.value
                        )
                      }
                      className="mt-2 w-full rounded-xl border border-black/10 bg-[#faf9f5] px-3 py-2.5 text-sm outline-none transition focus:border-black"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <select
                      value={image.category}
                      onChange={(event) =>
                        updateImage(
                          image.id,
                          "category",
                          event.target.value as WorkCategory
                        )
                      }
                      className="rounded-xl border border-black/10 bg-[#faf9f5] px-3 py-2.5 text-xs font-bold outline-none"
                    >
                      {categories.map((category) => (
                        <option
                          key={category.name}
                          value={category.name}
                        >
                          {category.name}
                        </option>
                      ))}
                    </select>

                    <button
                      type="button"
                      onClick={() => setFeatured(image.id)}
                      className={`rounded-xl px-3 py-2.5 text-xs font-bold transition ${
                        image.featured
                          ? "bg-black text-white"
                          : "border border-black/10 bg-[#faf9f5]"
                      }`}
                    >
                      {image.featured
                        ? "Featured"
                        : "Make featured"}
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeImage(image.id)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-500/10 px-4 py-2.5 text-xs font-bold text-red-600 transition hover:bg-red-50"
                  >
                    <Trash2 size={14} />
                    Remove photograph
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {visibleImages.length === 0 && (
          <div className="mt-12 rounded-[2rem] border border-black/10 bg-white p-12 text-center">
            <Camera className="mx-auto text-black/25" size={40} />
            <p className="mt-4 font-bold">No photographs in this category.</p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {activePreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 backdrop-blur-md"
            onClick={() => setActivePreview(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[90vh] max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={activePreview.src}
                alt={activePreview.alt}
                className="max-h-[78vh] max-w-full rounded-2xl object-contain"
              />

              <div className="mt-4 text-white">
                <p className="font-bold">{activePreview.caption}</p>
                <p className="mt-1 text-sm text-white/50">
                  {activePreview.category}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActivePreview(null)}
                className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default function OurWorkPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] =
    useState<WorkCategory | "All">("All")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        )

  return (
    <main className="min-h-screen overflow-hidden bg-[#faf9f5] text-[#101010]">

      {/* HERO */}
      <section className="relative flex min-h-[850px] items-center pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/our-work/hero.jpg"
            alt="Zindua Foundation community work"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-4xl text-white"
          >
            <SectionLabel light>Our Work</SectionLabel>

            <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[9rem]">
              Turning
              <span className="block text-white/55">
                potential
              </span>
              into possibility.
            </h1>

            <p className="mt-9 max-w-2xl text-base leading-8 text-white/70 sm:text-lg lg:text-xl">
              We work with people, communities and ideas to create
              pathways toward a smarter, more inclusive world.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-black text-black transition hover:scale-105"
              >
                Explore our work
                <ArrowDown size={17} />
              </a>

              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Get involved
                <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 right-8 hidden text-right text-white/50 lg:block">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em]">
            Zindua Foundation
          </div>
          <div className="mt-2 text-xs">Kenya • Smart World</div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-b border-black/10 bg-[#faf9f5] py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-12">
          <div>
            <SectionLabel>The approach</SectionLabel>

            <h2 className="max-w-3xl text-4xl font-black leading-[1] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              Real work.
              <br />
              Real people.
              <br />
              <span className="text-black/35">
                Real possibility.
              </span>
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="text-lg leading-9 text-black/65 sm:text-xl">
              Our work starts with listening. We look at what people
              need, what communities already have, and where technology,
              education and collaboration can unlock something better.
            </p>

            <p className="mt-6 text-base leading-8 text-black/45">
              We believe meaningful change does not happen through one
              person or one idea. It happens when people have access to
              knowledge, tools, networks and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-black py-24 text-white sm:py-32">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <SectionLabel light>What we focus on</SectionLabel>

            <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              Six pathways.
              <span className="block text-white/35">
                One bigger vision.
              </span>
            </h2>
          </div>

          <div className="mt-16 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => {
              const Icon = category.icon

              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                  }}
                  className="group border-b border-r border-white/10 p-7 transition hover:bg-white/[0.04] sm:p-9 lg:p-10"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15">
                      <Icon size={21} />
                    </div>

                    <span className="text-xs text-white/25">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-10 text-2xl font-black">
                    {category.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/45">
                    {category.description}
                  </p>

                  <div className="mt-8 h-px w-0 bg-white transition-all duration-500 group-hover:w-full" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-[#d9ff45] py-20 sm:py-28">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <SectionLabel>Our impact mindset</SectionLabel>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {impactNumbers.map((item) => (
              <div
                key={item.label}
                className="border-t border-black/20 pt-7"
              >
                <AnimatedCounter
                  value={item.value}
                  suffix={item.suffix}
                />

                <p className="mt-4 text-sm font-bold uppercase tracking-wider text-black/50">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="bg-[#faf9f5] py-24 sm:py-32"
      >
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <SectionLabel>Featured projects</SectionLabel>

              <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-7xl">
                Work that moves
                <span className="block text-black/35">
                  ideas forward.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-base leading-8 text-black/50">
              Explore some of the areas where Zindua is creating
              opportunities through learning, technology, leadership and
              community.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              className={`rounded-full px-5 py-3 text-xs font-bold ${
                activeCategory === "All"
                  ? "bg-black text-white"
                  : "bg-black/5 text-black/50"
              }`}
            >
              All projects
            </button>

            {categories.map((category) => (
              <button
                key={category.name}
                type="button"
                onClick={() =>
                  setActiveCategory(category.name)
                }
                className={`rounded-full px-5 py-3 text-xs font-bold ${
                  activeCategory === category.name
                    ? "bg-black text-white"
                    : "bg-black/5 text-black/50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="mt-12 space-y-7">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7 }}
                  className="group grid overflow-hidden rounded-[2rem] border border-black/10 bg-white lg:grid-cols-[1fr_1fr]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[500px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                      <span className="text-sm font-bold">
                        {project.location}
                      </span>

                      <span className="text-5xl font-black text-white/25">
                        {project.number}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-14">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-black/5 px-4 py-2 text-[10px] font-black uppercase tracking-wider">
                          {project.category}
                        </span>

                        <ArrowUpRight
                          className="text-black/25 transition group-hover:text-black"
                          size={22}
                        />
                      </div>

                      <h3 className="mt-12 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                        {project.title}
                      </h3>

                      <p className="mt-6 max-w-xl text-base leading-8 text-black/55">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-12 border-t border-black/10 pt-6">
                      <div className="flex items-center gap-3">
                        <CircleCheck size={18} />
                        <span className="text-sm font-bold">
                          {project.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="relative overflow-hidden bg-[#e9e5dc] py-24 sm:py-32">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="relative min-h-[550px] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/our-work/story.jpg"
                alt="People working together"
                fill
                className="object-cover"
              />

              <div className="absolute left-6 top-6 rounded-full bg-white px-4 py-2 text-xs font-black">
                PEOPLE FIRST
              </div>
            </div>

            <div>
              <SectionLabel>Why the work matters</SectionLabel>

              <Quote
                size={46}
                className="mb-7 text-black/15"
              />

              <h2 className="text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                A photograph captures a moment.
                <span className="text-black/35">
                  {" "}
                  Our work captures possibility.
                </span>
              </h2>

              <p className="mt-8 text-base leading-8 text-black/60">
                Behind every workshop, classroom, community activity,
                mentorship session and idea is a person with potential.
                Our role is to help create the conditions where that
                potential can grow.
              </p>

              <div className="mt-9 flex items-center gap-3 text-sm font-bold">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                  <Sparkles size={16} />
                </span>
                Building a smarter world together.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="text-center">
            <SectionLabel>How we work</SectionLabel>

            <h2 className="mx-auto max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              From listening
              <span className="text-black/30"> to action.</span>
            </h2>
          </div>

          <div className="relative mt-20">
            <div className="absolute bottom-0 left-6 top-0 w-px bg-black/10 sm:left-1/2" />

            {[
              {
                number: "01",
                title: "Listen",
                text: "We begin by understanding people, communities and the challenges they face.",
                icon: MessageCircle,
              },
              {
                number: "02",
                title: "Learn",
                text: "We identify opportunities, knowledge gaps and existing strengths.",
                icon: BookOpen,
              },
              {
                number: "03",
                title: "Build",
                text: "We bring people, tools and ideas together to develop practical solutions.",
                icon: Building2,
              },
              {
                number: "04",
                title: "Grow",
                text: "We strengthen what works and create pathways for sustainable growth.",
                icon: Rocket,
              },
            ].map((item, index) => {
              const Icon = item.icon
              const left = index % 2 === 0

              return (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    x: left ? -30 : 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  className={`relative mb-16 grid sm:grid-cols-2 ${
                    left ? "" : "sm:text-right"
                  }`}
                >
                  <div
                    className={`${
                      left
                        ? "sm:pr-20"
                        : "sm:order-2 sm:pl-20"
                    } pl-16`}
                  >
                    <div
                      className={`mb-5 flex ${
                        left
                          ? "sm:justify-start"
                          : "sm:justify-end"
                      }`}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                        <Icon size={19} />
                      </div>
                    </div>

                    <div className="text-xs font-black text-black/25">
                      {item.number}
                    </div>

                    <h3 className="mt-2 text-3xl font-black">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-black/50">
                      {item.text}
                    </p>
                  </div>

                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-[#d9ff45] text-xs font-black sm:left-1/2 sm:-translate-x-1/2">
                    {item.number}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* GALLERY MANAGER */}
      <GalleryManager />

      {/* PARTNERS */}
      <section className="bg-black py-24 text-white sm:py-32">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionLabel light>Collaboration</SectionLabel>

              <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Change becomes
                <span className="block text-white/35">
                  stronger together.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-white/55">
                Our work is strengthened through partnerships with
                people, institutions, educators, communities, innovators
                and organisations that believe in expanding opportunity.
              </p>

              <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
                {[
                  "EDUCATORS",
                  "COMMUNITIES",
                  "INNOVATORS",
                  "MENTORS",
                  "ORGANISATIONS",
                  "YOUTH",
                ].map((partner) => (
                  <div
                    key={partner}
                    className="flex min-h-28 items-center justify-center bg-black p-5 text-center text-xs font-black tracking-widest text-white/35 transition hover:bg-white/5 hover:text-white"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#faf9f5] py-24 sm:py-32">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
          <div className="text-center">
            <SectionLabel>Questions</SectionLabel>

            <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              About our work.
            </h2>
          </div>

          <div className="mt-14 divide-y divide-black/10 border-y border-black/10">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index

              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-6 py-7 text-left"
                  >
                    <span className="text-lg font-black sm:text-xl">
                      {faq.question}
                    </span>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10">
                      {isOpen ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-3xl pb-7 pr-14 text-sm leading-8 text-black/50 sm:text-base">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#d9ff45] py-24 sm:py-32">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border-[80px] border-black/[0.04]" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full border-[60px] border-black/[0.04]" />

        <div className="relative mx-auto max-w-[1200px] px-5 text-center sm:px-8">
          <Target
            className="mx-auto mb-7"
            size={45}
          />

          <h2 className="mx-auto max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            There is more work
            <span className="block text-black/30">
              to be done.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-black/60 sm:text-lg">
            Whether you have an idea, a skill, a photograph, a
            partnership or simply the desire to help, there is a place
            for you in the Zindua story.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-black text-white transition hover:scale-105"
            >
              Get involved
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/20 px-7 py-4 text-sm font-black transition hover:bg-black/5"
            >
              Start a conversation
              <MessageCircle size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black px-5 py-16 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto_auto]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-black">
                  <Globe2 size={21} />
                </div>

                <div>
                  <div className="text-xl font-black">
                    ZINDUA
                  </div>
                  <div className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/35">
                    Foundation
                  </div>
                </div>
              </div>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/40">
                Building pathways to a smarter, more inclusive world
                through people, education, technology and opportunity.
              </p>
            </div>

            <div>
              <div className="mb-5 text-xs font-black uppercase tracking-widest text-white/30">
                Explore
              </div>

              <div className="flex flex-col gap-3 text-sm text-white/60">
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
                <Link href="/our-work" className="text-white">
                  Our Work
                </Link>
                <Link
                  href="/get-involved"
                  className="hover:text-white"
                >
                  Get Involved
                </Link>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <div className="mb-5 text-xs font-black uppercase tracking-widest text-white/30">
                Vision
              </div>

              <div className="flex items-center gap-2 text-sm text-white/60">
                <Zap size={15} />
                Smart World
              </div>

              <div className="mt-3 flex items-center gap-2 text-sm text-white/60">
                <MapPin size={15} />
                Kenya
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/25 sm:flex-row">
            <span>
              © {new Date().getFullYear()} Zindua Foundation.
              All rights reserved.
            </span>

            <span>
              People • Opportunity • Innovation
            </span>
          </div>
        </div>
      </footer>
    </main>
  )
}