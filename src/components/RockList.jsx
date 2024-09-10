import { useEffect } from "react"

export const RockList = ({ rocks, fetchRocks }) => {
    useEffect(() => {
        fetchRocks()
    }, [])

    const displayRocks = () => {
        if (rocks && rocks.length) {
            return rocks.map(rock => <div key={`key-${rock.id}`} className="border p-5 border-solid hover:bg-fuchsia-500 hover:text-violet-50 rounded-md border-violet-900 mt-5 bg-slate-50">
                <div>{rock.name} ({rock.type.label}) weighs {rock.weight} kg.</div>
                <div>In the collection of {rock.user?.first_name} {rock.user?.last_name}.</div>
            </div>)
        }

        return <h3>Loading Rocks...</h3>
    }

    return (
        <>
            <h1 className="text-3xl">Rock List</h1>
            {displayRocks()}
        </>
    )
}
