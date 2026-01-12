import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BusinessCard } from "@/components/BusinessCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { BusinessModal } from "@/components/BusinessModal";
import { businesses, Business, Category, categories } from "@/data/businesses";
import { useState, useMemo } from "react";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Todos");
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);

  // Agrupa os negócios por categoria
  const businessesByCategory = useMemo(() => {
    const grouped: Record<string, Business[]> = {};
    
    const relevantCategories = selectedCategory === "Todos" 
      ? categories.filter(c => c !== "Todos")
      : [selectedCategory];
    
    relevantCategories.forEach(category => {
      const categoryBusinesses = businesses.filter(b => b.category === category);
      if (categoryBusinesses.length > 0) {
        grouped[category] = categoryBusinesses;
      }
    });
    
    return grouped;
  }, [selectedCategory]);

  let globalIndex = 0;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <CategoryFilter 
          selected={selectedCategory} 
          onSelect={setSelectedCategory} 
        />
        
        <div className="mt-10 space-y-12">
          {Object.entries(businessesByCategory).map(([category, categoryBusinesses]) => (
            <section key={category} id={category.toLowerCase().replace(/\s+/g, '-')}>
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-6">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  {category}
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
                <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                  {categoryBusinesses.length} {categoryBusinesses.length === 1 ? 'negócio' : 'negócios'}
                </span>
              </div>
              
              {/* Business Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryBusinesses.map((business) => {
                  const currentIndex = globalIndex++;
                  return (
                    <BusinessCard 
                      key={business.id} 
                      business={business} 
                      onClick={() => setSelectedBusiness(business)}
                      index={currentIndex}
                    />
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
      
      {selectedBusiness && (
        <BusinessModal
          business={selectedBusiness}
          onClose={() => setSelectedBusiness(null)}
        />
      )}
    </div>
  );
};

export default Index;
