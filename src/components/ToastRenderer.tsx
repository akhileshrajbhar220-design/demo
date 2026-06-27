import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X } from 'lucide-react';

export default function ToastRenderer() {
  const { toasts, removeToast } = useCart();

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2">
      <AnimatePresence>
        {toasts.map(toast => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="bg-stone-900 text-stone-50 px-4 py-3 shadow-lg flex items-center gap-3 min-w-[280px]"
          >
            <ShoppingBag className="w-4 h-4 text-stone-400" />
            <span className="text-sm font-medium tracking-wide flex-grow">{toast.message}</span>
            <button 
              onClick={() => removeToast(toast.id)}
              className="text-stone-400 hover:text-stone-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
