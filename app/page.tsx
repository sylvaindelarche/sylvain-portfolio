import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {`Sylvain Delarche`}
      </h1>
      <p className="mb-4">
        {`Je suis un développeur passionné, avec des compétences avancées en frontend et backend en Java, Python et React.`}<br /><br />
        
        {`Je suis experimenté dans la creation d'interfaces utilisateurs dynamiques, et de logique serveur robustes, avec des connaissances dans le CI/CD et le déploiement de services avec Docker et Kubernetes.`}<br /><br />
        
        {`Au cours de ma vie professionnelle, j'ai pu améliorer la qualité du code, l'optimiser mais aussi ajouter de nouvelles fonctionnalités.
        Toujours dans un but de m'améliorer, je suis à la recherche de nouveaux challenges, et de nouvelles technologies à expérimenter.`}<br />
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
