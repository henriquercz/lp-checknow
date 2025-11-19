'use client';

import { useEffect } from 'react';
import { Button } from '@/components/Button';
import { RefreshCw } from 'lucide-react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Logar o erro em um serviço de análise se necessário
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-neutral-900 text-center px-4">
            <h1 className="text-4xl font-bold text-red-500 mb-4">Algo deu errado!</h1>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-md mb-8">
                Encontramos um erro inesperado. Tente recarregar a página.
            </p>
            <Button
                onClick={() => reset()}
                icon={<RefreshCw size={18} />}
            >
                Tentar Novamente
            </Button>
        </div>
    );
}
