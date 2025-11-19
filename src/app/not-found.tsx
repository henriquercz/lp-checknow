import Link from 'next/link';
import { Button } from '@/components/Button';
import { Home } from 'lucide-react';

export const metadata = {
    title: 'Página Não Encontrada | CheckNow',
    description: 'A página que você está procurando não existe ou foi movida.',
};

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-neutral-900 text-center px-4">
            <h1 className="text-6xl font-bold text-primary-500 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
                Página não encontrada
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-md mb-8">
                Desculpe, não conseguimos encontrar a página que você está procurando. Ela pode ter sido removida ou o link pode estar incorreto.
            </p>
            <Link href="/">
                <Button icon={<Home size={18} />}>
                    Voltar para o Início
                </Button>
            </Link>
        </div>
    );
}
