import { OnRampStatus } from "@repo/db"
import { Card } from "@repo/ui/card"

export const OnRampTransactions = ({
    transactions
}: {
    transactions: {
        time: Date,
        amount: number,
        // TODO: Can the type of `status` be more specific? other than string
        status: string,
        provider: string
    }[]
}) => {
    if (!transactions.length) {
        return <Card title="Recent Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
    return <Card title="Recent Transactions">
        <div className="pt-2 ">
            {transactions.map(t => <div className="flex justify-between py-2 border-b border-slate-300  ">
                <div>
                    <div className="text-sm">
                        Received INR
                    </div>
                    <div className="text-slate-600 text-xs">
                        {t.time.toDateString()}
                    </div>
                    <div className="text-slate-600 text-xs">
                        {t.provider}
                    </div>
                </div>
               
                <div className="flex flex-col justify-center">
                    + Rs {t.amount / 100}
                     <div className=" text-slate-600 text-sm">
                    {t.status}
                </div>
                </div>
                {/* <br /> */}
            </div>)}
            
        </div>
    </Card>
}