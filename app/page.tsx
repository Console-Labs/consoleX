import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockAssets } from "@/lib/mock-data";
import Image from "next/image";

export default function Home() {
  const totalValue = mockAssets.reduce((acc, asset) => acc + asset.value, 0);
  const totalChange = (mockAssets.reduce((acc, asset) => acc + (asset.value * asset.change24h), 0) / totalValue);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/console-labs-logo.png"
              alt="Console Labs"
              width={32}
              height={32}
              className="dark:brightness-0 dark:invert"
            />
            <h1 className="text-2xl font-bold">Console X</h1>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" className="gap-2">
              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Connect Wallet
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Portfolio Overview */}
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card className="bg-card hover:bg-card/80 transition-colors">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Portfolio Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            </CardContent>
          </Card>
          <Card className="bg-card hover:bg-card/80 transition-colors">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">24h Change</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${totalChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {totalChange >= 0 ? '+' : ''}{totalChange.toFixed(2)}%
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card hover:bg-card/80 transition-colors">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">Number of Assets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockAssets.length}</div>
            </CardContent>
          </Card>
        </div>

        {/* Assets List */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Your Assets</span>
              <Button variant="outline" size="sm" className="gap-2">
                <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Asset
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {mockAssets.length > 0 ? (
              <div className="space-y-4">
                {mockAssets.map((asset) => (
                  <div key={asset.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {asset.symbol.slice(0, 1)}
                      </div>
                      <div>
                        <h3 className="font-semibold">{asset.name}</h3>
                        <p className="text-sm text-muted-foreground">{asset.amount} {asset.symbol}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">${asset.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
                      <div className={`text-sm ${asset.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {asset.change24h >= 0 ? '+' : ''}{asset.change24h}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                No assets added yet. Click "Add Asset" to get started.
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
