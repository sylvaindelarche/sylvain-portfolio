import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {`Sylvain Delarche`}
      </h1>
      <p className="mb-4">
        {`Je suis un développeur passionné, que ce soit dans le frontend avec React, ou dans le backend avec Java/Scala.`}<br />
        {`Je suis experimenté dans la creation d'interfaces utilisateurs dynamiques, et de logique serveur robustes, avec des connaissances dans le CI/CD et le déploiement de services avec Docker et Kubernetes.`}<br />
        {`Ma vie professionelle consiste dans la contribution à des plate-formes de services financiers et d'approvisionnement, où j'ai pu améliorer la qualité du code, l'optimiser mais aussi ajouter de nouvelles fonctionnalités.
        Toujours dans un but de m'améliorer, je suis à la recherche de nouveaux challenges, et de nouvelles technologies à expérimenter.`}<br />
        {`En dehors du pro, je suis un passioné de jeux vidéos ainsi que le jeu d'échec, auquel je fais parti d'un club depuis 2022.`}<br />
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
