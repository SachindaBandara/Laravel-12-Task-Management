import { Head, Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckSquare, Calendar, Users, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Welcome() {
    const { auth } = usePage().props;

    const features = [
        {
            icon: CheckSquare,
            title: 'Task Organization',
            description: 'Easily create, categorize, and prioritize your tasks with our intuitive interface.',
        },
        {
            icon: Calendar,
            title: 'Deadline Tracking',
            description: 'Set due dates and receive timely reminders to stay on top of your schedule.',
        },
        {
            icon: Users,
            title: 'Team Collaboration',
            description: 'Share tasks and projects with your team for seamless collaboration and progress tracking.',
        },
        {
            icon: BarChart,
            title: 'Progress Monitoring',
            description: 'Visualize your productivity with insightful charts and track your accomplishments.',
        },
    ];

    return (
        <>
            <Head title="TaskMaster - Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-muted/20">
                {/* Header */}
                <header className="w-full px-6 py-4 lg:px-8">
                    <nav className="flex items-center justify-between max-w-7xl mx-auto">
                        <div className="text-2xl font-bold text-primary">TaskMaster</div>
                        <div className="flex items-center gap-4">
                            {auth.user ? (
                                <Button asChild variant="default" className="font-medium">
                                    <Link href={route('dashboard')}>Dashboard</Link>
                                </Button>
                            ) : (
                                <>
                                    <Button asChild variant="ghost" className="font-medium">
                                        <Link href={route('login')}>Log in</Link>
                                    </Button>
                                    <Button asChild variant="default" className="font-medium">
                                        <Link href={route('register')}>Register</Link>
                                    </Button>
                                </>
                            )}
                        </div>
                    </nav>
                </header>

                {/* Main Content */}
                <main className="flex flex-col items-center flex-1 w-full px-6 py-12 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl text-center"
                    >
                        <Card className="border-none shadow-lg bg-background/80 backdrop-blur-sm">
                            <CardHeader className="space-y-4">
                                <CardTitle className="text-4xl font-bold tracking-tight md:text-5xl">
                                    Welcome to TaskMaster
                                </CardTitle>
                                <CardDescription className="text-lg text-muted-foreground">
                                    Your all-in-one solution to organize tasks, boost productivity, and achieve your goals effortlessly.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <p className="text-muted-foreground">
                                    {auth.user
                                        ? 'Welcome back! Access your dashboard to manage your tasks and projects.'
                                        : 'Sign up today to streamline your workflow and take control of your tasks.'}
                                </p>
                                <div className="flex justify-center gap-4">
                                    {auth.user ? (
                                        <Button asChild size="lg" className="font-semibold">
                                            <Link href={route('dashboard')}>Go to Dashboard</Link>
                                        </Button>
                                    ) : (
                                        <>
                                            <Button asChild size="lg" className="font-semibold">
                                                <Link href={route('register')}>Get Started</Link>
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Features Section */}
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="w-full max-w-7xl mt-16"
                    >
                        <h2 className="text-3xl font-semibold text-center mb-8">Key Features</h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                                >
                                    <Card className="h-full transition-shadow hover:shadow-md">
                                        <CardHeader className="flex flex-row items-center gap-4">
                                            <feature.icon className="h-8 w-8 text-primary" />
                                            <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">{feature.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                </main>

                {/* Footer */}
                <footer className="w-full py-6 bg-muted/50">
                    <div className="max-w-7xl mx-auto px-6 text-center text-muted-foreground">
                        <p>&copy; {new Date().getFullYear()} TaskMaster. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}
