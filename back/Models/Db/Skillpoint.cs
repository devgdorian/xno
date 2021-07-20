namespace Xno.Models.Db
{
    public class Skillpoint
    {
        public int Id { get; set; }

        public Character Character { get; set; }

        public Skill Skill { get; set; }

        public int Value { get; set; }
    }
}