using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Xno.Models.Db
{
    public class ApplicationDbContext : IdentityDbContext<AppUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        { }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            modelBuilder.Entity<IdentityRole>().ToTable("AppRoles");
            modelBuilder.Entity<IdentityUserClaim<string>>().ToTable("AppUserClaims");
            modelBuilder.Entity<IdentityUserLogin<string>>().ToTable("AppUserLogins");
            modelBuilder.Entity<IdentityUserRole<string>>().ToTable("AppUserRoles");
            modelBuilder.Entity<IdentityRoleClaim<string>>().ToTable("AppRoleClaims");
            modelBuilder.Entity<IdentityUserToken<string>>().ToTable("AppUserTokens");
            modelBuilder.Entity<AppUser>().ToTable("AppUsers");
        }

        public DbSet<AppUser> AppUsers { get; set; }

        public DbSet<Character> Characters { get; set; }

        public DbSet<Perk> Perks { get; set; }

        public DbSet<Race> Races { get; set; }

        public DbSet<Skill> Skills { get; set; }
        
        public DbSet<Skillpoint> Skillpoints { get; set; }
    }
}