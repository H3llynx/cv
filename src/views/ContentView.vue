<script setup>
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import CertificationCard from '../components/CertificationCard.vue';
import PortfolioCard from '../components/PortfolioCard.vue';
import SectionsCv from '../components/SectionsCv.vue';
import { english, french, portfolio, spanish } from '../config/curriculum.js';

const route = useRoute();

watch(
  () => route.params.lang,
  (lang) => { document.documentElement.lang = lang },
  { immediate: true }
);

const cv = computed(() => {
  if (route.params.lang === 'en') return english
  if (route.params.lang === 'es') return spanish
  return french;
}
);
</script>
<template>
  <main>
    <SectionsCv>
      <template #icon><span class="material-symbols-outlined">
          apps
        </span></template>
      <template #heading>{{ cv.techSkills.title }}</template>
      <ul class="no-deco">
        <li v-for="skill in cv.techSkills.content" :key="skill">
          <span class="gradient">{{ skill.category }}</span>: {{ skill.skills }}
        </li>
      </ul>
    </SectionsCv>

    <SectionsCv>
      <template #icon><span class="material-symbols-outlined">
          photo_frame
        </span>
      </template>
      <template #heading>{{ portfolio.title }}</template>
      <ul class="slider">
        <PortfolioCard v-for="project in portfolio.content" :key="project.name" class="card">
          <template #screenshot><img :src="project.screenshot" alt=""></template>
          <template #heading>{{ project.name }}</template>
          <template #links>
            <a v-if="project.link" :href="project.link" class="icon-link" target="_blank" tabindex="0"
              aria-label="portfolio site">
              <i class="fa-solid fa-link"></i>
            </a>
            <a v-if="project.code" :href="project.code" class="icon-link" target="_blank" tabindex="0"
              aria-label="portfolio code">
              <i class="fa-solid fa-code"></i>
            </a>
          </template>
          <template #tags>
            <span class="tag" v-for="tag in project.tags" :key="tag">#{{ tag }}</span>
          </template>
        </PortfolioCard>
      </ul>
    </SectionsCv>

    <SectionsCv>
      <template #icon><span class="material-symbols-outlined">
          play_lesson
        </span>
      </template>
      <template #heading>{{ cv.technicalProfessionalTraining.title }}</template>
      <ul class="no-deco">
        <li v-for="training in cv.technicalProfessionalTraining.content" :key="training">
          <span class="gradient">{{ training.year }}</span>: {{ training.title }} - {{ training.institution }} <span
            class="status" v-if="training.status">({{ training.status }})</span>
        </li>
      </ul>
    </SectionsCv>

    <SectionsCv>
      <template #icon><span class="material-symbols-outlined">
          workspace_premium
        </span>
      </template>
      <template #heading>{{ cv.certifications.title }}</template>
      <ul class="slider">
        <CertificationCard v-for="cert in cv.certifications.content" :key="cert.title" class="card">
          <template #heading>{{ cert.title }}</template>
          <template #tags>
            <span class="tag" v-for="tag in cert.info.tags" :key="tag">#{{ tag }}</span>
          </template>
          <template #bottom>
            <a :href="cert.info.link" target="_blank" class="link" tabindex="0">
              Certification
            </a>
            <i :class="cert.info.logo"></i>
          </template>
        </CertificationCard>
      </ul>
    </SectionsCv>

    <SectionsCv>
      <template #icon><span class="material-symbols-outlined">
          work
        </span></template>
      <template #heading>{{ cv.workExperience.title }}</template>
      <ul class="no-deco">
        <li class="xp" v-for="experience in cv.workExperience.content" :key="experience">
          <span class="gradient">{{ experience.period }}</span>: <span class="bold">{{ experience.title }}</span> - {{
            experience.company }}
          <p v-if="experience.description"> {{ experience.description }}</p>
        </li>
      </ul>
    </SectionsCv>

    <SectionsCv>
      <template #icon><span class="material-symbols-outlined">
          psychology
        </span></template>
      <template #heading>{{ cv.professionalStrengths.title }}</template>
      <ul>
        <li v-for="strength in cv.professionalStrengths.content" :key="strength">{{ strength }}</li>
      </ul>
    </SectionsCv>

    <SectionsCv>
      <template #icon><span class="material-symbols-outlined">
          book
        </span></template>
      <template #heading>{{ cv.formalEducation.title }}</template>
      <ul class="no-deco">
        <li v-for="education in cv.formalEducation.content" :key="education">
          <span class="gradient">{{ education.year }}</span>: {{ education.title }}
        </li>
      </ul>
    </SectionsCv>
  </main>
</template>

<style scoped>
.slider {
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
  grid-auto-columns: 260px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin: 1rem 0;
  padding: 0.8rem;

  &::-webkit-scrollbar-thumb {
    background: var(--color-border);
  }

  &::-webkit-scrollbar {
    height: 6px;
    background: transparent;
  }
}

.card {
  transition: 0.6s;
}

p {
  color: var(--color-heading);
  font-size: 0.9rem;
}

.gradient {
  font-weight: 700;
  background-image: var(--main-gradient);
  background-size: var(--main-gradient-size);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: colors 6s infinite;
}

.bold {
  font-weight: 600;
}

ul {
  padding: 0 1rem;
}

.no-deco {
  list-style: none;
  padding: 0;
}

.xp {
  margin: 1rem auto;
}

.link {
  color: var(--color-background);
  -webkit-text-fill-color: var(--color-background);
  background: var(--color-pill);
  border-radius: 2rem;
  transition: 0.6s;
  padding: 0.4rem 1.2rem;
  font-size: 0.8rem;
  font-weight: 600;

  &:hover {
    background: var(--color-heading);
    border-color: transparent;
    transform: scale(1.05);
  }
}

.tag {
  color: var(--color-heading);
  -webkit-text-fill-color: var(--color-heading);
  background: var(--icon-gradient);
  background-size: var(--main-gradient-size);
  animation: var(--main-background-animation);
  border-radius: 0.6rem;
  padding: 0.4rem 0.6rem;
  font-size: 0.6rem;
  font-weight: 500;
}

.status {
  color: var(--color-heading);
  font-size: 0.7rem;
  font-weight: 500;
  margin-left: 5px;
}

img {
  width: 100%;
}

.icon-link {
  font-size: 1.1rem;
  border: 0;
  padding: 0 0.4rem;
}

.icon-link:hover,
.icon-link:focus-visible {
  border: 0;
  font-size: 1.4rem;
}

@media (min-width: 1024px) {
  .card:hover {
    transform: scale(1.03);
  }

}

@media only screen and (max-width:600px) {
  .slider {
    grid-auto-columns: 90%;
    padding: 0.5rem 2rem;
  }

  ul {
    padding: 0 2rem 0 4.45rem;
  }

  .no-deco {
    padding: 0 2rem 0 3.5rem;
  }
}
</style>
