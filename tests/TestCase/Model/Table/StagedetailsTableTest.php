<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\StagedetailsTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\StagedetailsTable Test Case
 */
class StagedetailsTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\StagedetailsTable
     */
    public $Stagedetails;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.stagedetails',
        'app.creator',
        'app.editor',
        'app.stages'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('Stagedetails') ? [] : ['className' => 'App\Model\Table\StagedetailsTable'];
        $this->Stagedetails = TableRegistry::get('Stagedetails', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Stagedetails);

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
