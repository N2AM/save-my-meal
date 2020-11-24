<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\StudentanswersTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\StudentanswersTable Test Case
 */
class StudentanswersTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\StudentanswersTable
     */
    public $Studentanswers;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.studentanswers',
        'app.creator',
        'app.editor',
        'app.students',
        'app.questions',
        'app.models',
        'app.settings',
        'app.studentmodels',
        'app.answers'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('Studentanswers') ? [] : ['className' => 'App\Model\Table\StudentanswersTable'];
        $this->Studentanswers = TableRegistry::get('Studentanswers', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Studentanswers);

        parent::tearDown();
    }

    /**
     * Test initialize method
     *
     * @return void
     */
    public function testInitialize()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test validationDefault method
     *
     * @return void
     */
    public function testValidationDefault()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test buildRules method
     *
     * @return void
     */
    public function testBuildRules()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
