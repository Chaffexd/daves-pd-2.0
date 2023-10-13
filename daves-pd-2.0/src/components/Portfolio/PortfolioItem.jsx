import Button from "../ui/Button"

const PortfolioItem = ({ source, title, info }) => {
  return (
        <div className="flex items-center flex-col justify-between">
            <img src={source} alt={title} className="rounded-b-xl mb-8 h-64" />
            <div className="w-3/4 text-center flex flex-col items-center">
                <p className="mb-4">{title}</p>
                <p className="mb-8">{info}</p>
                <Button />
            </div>
        </div>
  )
}

export default PortfolioItem