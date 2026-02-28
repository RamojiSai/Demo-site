import autocad from "@/assets/platforms/autocad.png";
import autocadPlant3d from "@/assets/platforms/autocad-plant3d.webp";
import sp3d from "@/assets/platforms/sp3d.png";
import pdms from "@/assets/platforms/pdms.png";
import cadworx from "@/assets/platforms/cadworx.webp";
import caesarII from "@/assets/platforms/caesar-ii.png";
import autopipe from "@/assets/platforms/autopipe.png";

const designPlatforms = [
  { name: "AutoCAD", image: autocad },
  { name: "AutoCAD Plant 3D", image: autocadPlant3d },
  { name: "SP3D", image: sp3d },
  { name: "E3D", image: null, text: "E3D" },
  { name: "PDMS", image: pdms },
  { name: "CADWORX", image: cadworx },
];

const stressAnalysisPlatforms = [
  { name: "CAESAR II", image: caesarII },
  { name: "AutoPIPE", image: autopipe },
];

export function WorkPlatformsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container-industrial">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            Our Expertise
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Work Platforms
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We leverage industry-leading software platforms to deliver precise engineering 
            and design solutions for complex industrial projects.
          </p>
        </div>

        {/* Design & Modeling Platforms */}
        <div className="mb-16">
          <h3 className="font-heading text-xl font-semibold text-primary mb-8 text-center">
            Design & Modeling Platforms
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {designPlatforms.map((platform) => (
              <div
                key={platform.name}
                className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col items-center justify-center min-h-[160px] border border-border/50 hover:border-accent/30"
              >
                {platform.image ? (
                  <div className="w-full h-20 flex items-center justify-center mb-3">
                    <img
                      src={platform.image}
                      alt={platform.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                    <span className="text-2xl font-bold text-primary-foreground">{platform.text}</span>
                  </div>
                )}
                <span className="text-sm font-medium text-foreground/80 text-center">
                  {platform.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stress Analysis Platforms */}
        <div>
          <h3 className="font-heading text-xl font-semibold text-primary mb-8 text-center">
            Stress Analysis Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {stressAnalysisPlatforms.map((platform) => (
              <div
                key={platform.name}
                className="group bg-card rounded-xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col items-center justify-center min-h-[180px] border border-border/50 hover:border-accent/30"
              >
                <div className="w-full h-24 flex items-center justify-center mb-4">
                  <img
                    src={platform.image}
                    alt={platform.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-base font-medium text-foreground/80 text-center">
                  {platform.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm max-w-3xl mx-auto">
            Our engineering team is proficient in all major industry-standard platforms, 
            ensuring seamless integration with your existing workflows and delivering 
            outputs in your preferred format.
          </p>
        </div>
      </div>
    </section>
  );
}
