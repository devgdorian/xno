using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Xno.Models.Enums;

namespace Xno.Models.Db
{
    public class Character
    {
        public int Id { get; set; }

        [StringLength(30)]
        public string Name { get; set; }

        public AppUser User { get; set; }

        public HealthStatus HealthStatus { get; set; }

        public Race Race { get; set; }

        public List<Perk> Perks { get; set; }

        public List<Skillpoint> Skillpoints { get; set; }

        public bool IsCurrent { get; set; }
    }
}