namespace Xno.Models.Db
{
    public class Perk
    {
        public int Id { get; set; }

        public string Code { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public Skill Skill { get; set; }

        public int Modifier { get; set; }

        public int Duration { get; set; } = 0;

        public bool isTemporary()
        {
            return Duration != 0;
        }
    }
}